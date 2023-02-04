/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from 'dayjs'
import { FC } from 'react'

type Props = {
  fields: any
}

export const MailToAdminHtml: FC<Props> = ({ fields }) => {
  return (
    <>
      <p>お名前：{fields.fullname ? fields.fullname : null}</p>
      <p>連絡先：{fields.email}</p>
      <p>携帯番号：{fields.phoneNumber}</p>
      <p>郵便番号：{fields.postalCode}</p>
      <p>住所：{fields.address}</p>
      <div>
        <h3>見積もり現場確認希望日</h3>
        <p>第一希望日：{dayjs(fields.firstDate).format('YYYY/MM/DD')}</p>
        <p>第二希望日：{dayjs(fields.secondDate).format('YYYY/MM/DD')}</p>
        <p>第三希望日：{dayjs(fields.thirdDate).format('YYYY/MM/DD')}</p>
      </div>
      <p>お問い合わせ内容：{fields.inquiry}</p>
    </>
  )
}

export const MailToUserHtml: FC<Props> = ({ fields }) => {
  return (
    <>
      <p>※このメールはシステムからの自動返信です。</p>
      <p>
        ○○へのお問合せありがとうございました。
        <br />
        以下の内容でお問合せを受付いたしました。
      </p>
      <div>
        <p>——————————————————————————————————</p>
        <p>お名前：{fields.fullname}</p>
        <p>連絡先：{fields.email}</p>
        <p>携帯番号：{fields.phoneNumber}</p>
        <p>郵便番号：{fields.postalCode}</p>
        <p>住所{fields.address}</p>
        <div>
          <h3>見積もり現場確認希望日</h3>
          <p>第一希望日：{dayjs(fields.firstDate).format('YYYY/MM/DD')}</p>
          <p>第二希望日：{dayjs(fields.secondDate).format('YYYY/MM/DD')}</p>
          <p>第三希望日：{dayjs(fields.thirdDate).format('YYYY/MM/DD')}</p>
        </div>
        <p>お問い合わせ内容：{fields.inquiry}</p>
        <p>——————————————————————————————————</p>
      </div>
      <p>内容を確認致し、改めて担当よりご連絡いたします。</p>
      <p>
        ※本メールを受信された日より○営業日を過ぎても弊社より連絡がない場合は、お手数ではございますが弊社窓口（000-0000-0000、受付時間10:00〜19:00）までご連絡くださいますようお願い申し上げます。
      </p>
      <p>
        ※このメールに心当たりのない場合や、ご不明な点がございましたら、〇〇〇〇＠〇〇〇〇までご連絡ください。
      </p>
    </>
  )
}
