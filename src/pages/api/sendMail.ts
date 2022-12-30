/* eslint-disable @typescript-eslint/no-explicit-any */
import formidable from 'formidable'
import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'
import { sendMaiToSetting } from 'src/component/mailer/sendMailSetting'
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

  form.parse(req, async function (err, fields: any, files: any) {
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

      const sendMailToAdmin = sendMaiToSetting(
        fields,
        files,
        process.env.MAIL_USER,
        0,
      )
      const sendMailToUser = sendMaiToSetting(fields, files, fields.email, 1)
      //管理者にメール送信
      await transporter.sendMail(sendMailToAdmin)
      //ユーザーにメール送信
      await transporter.sendMail(sendMailToUser)
      res.status(200)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  })
}
