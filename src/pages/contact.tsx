import { TextInput, Textarea, Button, FileInput } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { useForm } from '@mantine/form'
import type { NextPage } from 'next'
import 'dayjs/locale/ja'

const Contact: NextPage = () => {
  type FormValues = {
    firstName: string
    lastName: string
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
      const reqData = new FormData()
      reqData.append('firstName', data.firstName)
      reqData.append('lastName', data.lastName)
      reqData.append('email', data.email)
      reqData.append('phoneNumber', data.phoneNumber)
      reqData.append('postalCode', data.postalCode)
      reqData.append('address', data.address)
      reqData.append('uploadFile', data.uploadFile || '')
      reqData.append('firstDate', String(data.firstDate))
      reqData.append('secondDate', String(data.secondDate))
      reqData.append('thirdDate', String(data.thirdDate))
      reqData.append('inquiry', data.inquiry)

      const res = fetch('/api/sendMail', {
        method: 'POST',
        body: reqData,
      })
      console.log('res: ', res)
      // form.reset()
      alert('お問い合わせが送信されました。')
    } catch (error) {
      console.error('Fetch error : ', error)
      alert(JSON.stringify(error))
    }
  }
  const form = useForm<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
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
      firstName: (value) =>
        value.length <= 0 ? '姓を入力してください。' : null,
      lastName: (value) =>
        value.length <= 0 ? '名を入力してください。' : null,
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : 'メールアドレスを入力してください。',
      inquiry: (value) =>
        value.length <= 0 ? 'お問合せ内容を入力してください。' : null,
    },
  })

  return (
    <div className="pt-[70px]">
      <form
        className="max-w-[650px] mx-auto"
        onSubmit={form.onSubmit((values) => onSubmit(values))}
      >
        <div className="w-full flex justify-between ">
          <TextInput
            label="姓"
            placeholder="田中"
            className="w-5/12"
            {...form.getInputProps('firstName')}
            withAsterisk
          />
          <TextInput
            label="名"
            placeholder="太朗"
            className="w-5/12"
            {...form.getInputProps('lastName')}
            withAsterisk
          />
        </div>
        <TextInput
          label="メールアドレス"
          placeholder="xxx@xxx.com"
          {...form.getInputProps('email')}
          withAsterisk
        />
        <TextInput
          label="携帯番号"
          placeholder="xxx-xxxx-xxxx"
          {...form.getInputProps('phoneNumber')}
        />
        <TextInput
          label="郵便番号"
          placeholder="xxx-xxxx"
          {...form.getInputProps('postalCode')}
        />
        <TextInput
          label="住所"
          placeholder="xxx県xxxxx町xxx"
          {...form.getInputProps('address')}
        />

        <FileInput
          placeholder="見積もりのファイルを添付してください。"
          label="見積もり"
          accept="image/*,.pdf"
          {...form.getInputProps('uploadFile')}
        />
        <div className="my-6">
          <p>見積もり現場確認希望日</p>
          <DatePicker
            locale="ja"
            placeholder=""
            inputFormat="YYYY/MM/DD"
            label="第一希望"
            defaultValue={new Date()}
            {...form.getInputProps('firstDate')}
          />
          <DatePicker
            locale="ja"
            placeholder=""
            inputFormat="YYYY/MM/DD"
            label="第二希望"
            defaultValue={new Date()}
            {...form.getInputProps('secondDate')}
          />
          <DatePicker
            locale="ja"
            placeholder=""
            inputFormat="YYYY/MM/DD"
            label="第三希望"
            defaultValue={new Date()}
            {...form.getInputProps('thirdDate')}
          />
        </div>
        <Textarea
          placeholder="お問い合わせの内容を入力してください。"
          label="お問合せ内容"
          withAsterisk
          {...form.getInputProps('inquiry')}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default Contact
