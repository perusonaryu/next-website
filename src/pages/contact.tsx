import { TextInput, Textarea, Button, FileInput, Loader } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { useForm } from '@mantine/form'
import type { NextPage } from 'next'
import { useState } from 'react'
import 'dayjs/locale/ja'

const Contact: NextPage = () => {
  //0:入力画面,1:確認画面,2:完了画面
  const [formType, setFormType] = useState<number>(0)
  type FormValues = {
    fullname: string
    email: string
    phoneNumber: string
    postalCode: string
    address: string
    uploadFile: File | null
    firstDate: Date | null
    secondDate: Date | null
    thirdDate: Date | null
    inquiry: string
  }

  const onSubmit = async (data: FormValues) => {
    try {
      //ローディング画面へ
      setFormType(1)
      const reqData = new FormData()
      reqData.append('fullname', data.fullname)
      reqData.append('email', data.email)
      reqData.append('phoneNumber', data.phoneNumber)
      reqData.append('postalCode', data.postalCode)
      reqData.append('address', data.address)
      reqData.append('uploadFile', data.uploadFile || '')
      reqData.append('firstDate', String(data.firstDate))
      reqData.append('secondDate', String(data.secondDate))
      reqData.append('thirdDate', String(data.thirdDate))
      reqData.append('inquiry', data.inquiry)

      const res = await fetch('/api/sendMail', {
        method: 'POST',
        body: reqData,
      })
      console.log('res: ', res.json())
      // form.reset()
      //完了画面へ
      setFormType(2)
    } catch (error) {
      console.error('Fetch error : ', error)
    }
  }
  const form = useForm<FormValues>({
    validateInputOnChange: true,
    initialValues: {
      fullname: '',
      email: '',
      phoneNumber: '',
      postalCode: '',
      address: '',
      uploadFile: null,
      firstDate: null,
      secondDate: null,
      thirdDate: null,
      inquiry: '',
    },
    validate: {
      fullname: (value) =>
        value.length <= 0 ? '姓を入力してください。' : null,
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : 'メールアドレスを入力してください。',
      inquiry: (value) =>
        value.length <= 0 ? 'お問合せ内容を入力してください。' : null,
    },
  })

  return (
    <div className="my-[40px]">
      {formType == 0 && (
        <form
          className="max-w-[650px] mx-auto"
          onSubmit={form.onSubmit((values) => onSubmit(values))}
        >
          <TextInput
            className="mb-4"
            label="お名前"
            placeholder="沖縄太朗"
            {...form.getInputProps('fullname')}
            withAsterisk
          />
          <TextInput
            className="mb-4"
            label="メールアドレス"
            placeholder="xxx@xxx.com"
            {...form.getInputProps('email')}
            withAsterisk
          />
          <TextInput
            className="mb-4"
            label="携帯番号"
            placeholder="xxx-xxxx-xxxx"
            {...form.getInputProps('phoneNumber')}
          />
          <TextInput
            className="mb-4"
            label="郵便番号"
            placeholder="xxx-xxxx"
            {...form.getInputProps('postalCode')}
          />
          <TextInput
            className="mb-4"
            label="住所"
            placeholder="xxx県xxxxx町xxx"
            {...form.getInputProps('address')}
          />

          <FileInput
            className="mb-4"
            placeholder="見積もりのファイルを添付してください。"
            label="見積もり"
            accept="image/*,.pdf"
            {...form.getInputProps('uploadFile')}
          />
          <div className="mb-4">
            <h4>見積もり現場確認希望日</h4>
            <DatePicker
              locale="ja"
              placeholder=""
              inputFormat="YYYY/MM/DD"
              firstDayOfWeek="sunday"
              label="第一希望"
              defaultValue={new Date()}
              {...form.getInputProps('firstDate')}
            />
            <DatePicker
              locale="ja"
              placeholder=""
              inputFormat="YYYY/MM/DD"
              firstDayOfWeek="sunday"
              label="第二希望"
              defaultValue={new Date()}
              {...form.getInputProps('secondDate')}
            />
            <DatePicker
              locale="ja"
              placeholder=""
              inputFormat="YYYY/MM/DD"
              firstDayOfWeek="sunday"
              label="第三希望"
              defaultValue={new Date()}
              {...form.getInputProps('thirdDate')}
            />
          </div>
          <Textarea
            className="mb-4"
            placeholder="お問い合わせの内容を入力してください。"
            label="お問合せ内容"
            withAsterisk
            {...form.getInputProps('inquiry')}
          />
          <div className="flex justify-center">
            <Button className="rounded-3xl" color="dark" type="submit">
              お問い合わせを送信する
            </Button>
          </div>
        </form>
      )}
      {formType == 1 && (
        <div className="flex justify-center">
          <Loader color="dark" />
        </div>
      )}
      {formType == 2 && (
        <div className="flex justify-center">
          <p>お問合わせありがとうございます。</p>
        </div>
      )}
    </div>
  )
}

export default Contact
