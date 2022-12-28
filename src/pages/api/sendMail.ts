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
      // const sendMail = {
      //   from: process.env.MAIL_USER,
      //   to: process.env.MAIL_USER,
      //   subject: '塗装HPからお問い合わせを受け付けました。',
      //   html: `
      //   <p>お名前：${fields.firstName + ' ' + fields.lastName}</p>
      //   <p>連絡先：${fields.email}</p>
      //   <p>携帯番号：${fields.phoneNumber}</p>
      //   <p>郵便番号：${fields.postalCode}</p>
      //   <p>住所${fields.address}</p>
      //   <div>
      //     <h3>見積もり現場確認希望日</h3>
      //     <p>第一希望日：${dayjs(fields.firstDate).format('YYYY/MM/DD')}</p>
      //     <p>第二希望日：${dayjs(fields.secondDate).format('YYYY/MM/DD')}</p>
      //     <p>第三希望日：${dayjs(fields.thirdDate).format('YYYY/MM/DD')}</p>
      //   </div>
      //   <p>お問い合わせ内容：${fields.inquiry}</p>
      //   `,
      //   attachments: [
      //     {
      //       filename: files.uploadFile.originalFilename,
      //       content: fs.createReadStream(files.uploadFile.filepath),
      //     },
      //   ],
      // }
      const sendMailToAdmin = sendMaiToSetting(
        fields,
        files,
        process.env.MAIL_USER,
        0,
      )
      const sendMailToUser = sendMaiToSetting(fields, files, fields.email, 1)
      //管理者にメール送信
      await transporter.sendMail(sendMailToAdmin)
      await transporter.sendMail(sendMailToUser)
      //ユーザーにメール送信
      // await transporter.sendMail(
      //   sendMaiToSetting(fields, files, fields.email, 1),
      // )
      res.status(200)
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  })
}
