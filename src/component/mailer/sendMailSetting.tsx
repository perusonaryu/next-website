/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs'
import { renderToString } from 'react-dom/server'
import { MailToAdminHtml, MailToUserHtml } from 'src/component/mailer/mailHtml'

type sendMail = {
  from: string | undefined
  to: string | undefined
  subject: string | undefined
  html: any
  attachments?: any
}
export const sendMaiToSetting = (
  fields: any,
  files: any,
  destination: string | undefined,
  subject: number,
) => {
  //0:admin,1:user
  const subjectText = [
    '塗装HPからお問い合わせを受け付けました。',
    `${fields.fullname}様お問い合わせありがとうございます。`,
  ]
  const sendMail: sendMail = {
    from: process.env.MAIL_USER,
    to: destination,
    subject: subjectText[subject],
    html:
      subject == 0
        ? renderToString(<MailToAdminHtml fields={fields} />)
        : renderToString(<MailToUserHtml fields={fields} />),
  }

  //ファイル添付があればファイルも送信する。
  if (files.uploadFile) {
    sendMail.attachments = [
      {
        filename: files.uploadFile.originalFilename,
        content: fs.createReadStream(files.uploadFile.filepath),
      },
    ]
  }
  return sendMail
}
