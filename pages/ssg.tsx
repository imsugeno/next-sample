// 型のために導入
import { NextPage, GetStaticProps, NextPageContext } from 'next'
// Next.jsの組み込みのコンポーネント
import Head from 'next/head'

type SSGProps = {
    message: string
}

// SSGはgetStaticPropsが返したpropsを受け取ることができる
// NextPage<SSGProps>はmessage:stringのみを受け取って生成されるページの型
const SSG: NextPage<SSGProps> = (props) => {
    const { message } = props

    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>
                    このページはSSGで生成されました。
                </p>
                <p>{message}</p>
            </main>
        </div>
    )
}

// getStaticPropsはビルド時に実行される
// GetStaticProps<SSGProps>はSSGPropsを引数に取るgetStaticPropsの型
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp} にgetStaticPropsが実行されました`
    console.log(message)
    return {
        // ここで返したpropsを元にページコンポーネントを描画する
        props: {
            message,
        },
    }
}

export default SSG