import fs from 'fs'
import formidable from 'formidable'
import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'
export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const form = new formidable.IncomingForm()

  form.parse(req, async function (err, fields, files: any) {
    if (err) {
      res.status(500).json(err)
    }
    try {
      const transporter = createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        secure: true,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      })
      const sendMail = {
        from: process.env.MAIL_USER,
        to: process.env.MAIL_USER,
        subject: '塗装HPからお問い合わせを受け付けました。',
        html: `
        <p>お名前：${fields.firstName + ' ' + fields.lastName}</p>
        <p>連絡先：${fields.email}</p>
        <p>お問い合わせ内容：${fields.inquiry}</p>
        `,
        attachments: [
          {
            filename: files.uploadFile.originalFilename,
            content: fs.createReadStream(files.uploadFile.filepath),
          },
        ],
      }
      await transporter.sendMail(sendMail)
      res.status(200).json(sendMail)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  })
}
