import { TextInput, Textarea, Button, FileInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import type { NextPage } from 'next'

const Contact: NextPage = () => {
  type FormValues = {
    firstName: string
    lastName: string
    email: string
    uploadFile: File | null
    contentOfInquiry: string
  }

  const onSubmit = async (data: FormValues) => {
    try {
      const res = fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      console.log('res: ', res)
      form.reset()
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
      uploadFile: null,
      contentOfInquiry: '',
    },
    validate: {
      firstName: (value) =>
        value.length <= 0 ? '姓を入力してください。' : null,
      lastName: (value) =>
        value.length <= 0 ? '名を入力してください。' : null,
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : 'メールアドレスを入力してください。',
      uploadFile: (value) =>
        value == null ? 'ファイルを添付してください。' : null,
      contentOfInquiry: (value) =>
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
        <FileInput
          placeholder="見積もりのファイルを添付してください。"
          label="見積もり"
          withAsterisk
          {...form.getInputProps('uploadFile')}
        />
        <Textarea
          placeholder="お問い合わせの内容を入力してください。"
          label="お問合せ内容"
          withAsterisk
          {...form.getInputProps('contentOfInquiry')}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default Contact
