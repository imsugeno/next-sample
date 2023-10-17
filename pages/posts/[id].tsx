import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from 'next/head'
import { useRouter } from "next/router";
import { ParsedUrlQuery } from 'querystring'

type PostProps = {
    id: string
}

const Post: NextPage<PostProps> = (props) => {
    const { id } = props
    const router = useRouter()

    if (router.isFallback) {
        // フォールバック向けのページを返す
        return <div>Loading...</div>
    }

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>このページは動的サイト生成によってビルド時に作成された</p>
                <p>{`/posts/${id}に対応`}</p>
            </main>
        </div>
    )
}

// getStaticPathsは生成したいページのパスパラメータの組み合わせを返す
// このファイルはpages/posts/[id].tsxなので、パスパラメータとしてidを返す必要がある
export const getStaticPaths: GetStaticPaths = async () => {
    // それぞれのページのパスパラメータをまとめたもの
    const paths = [
        { params: { id: '1' } },
        { params: { id: '2' } },
        { params: { id: '3' } },
    ]
    
    // fallback: falseだとpathsで返したパスパラメータ以外のページは404になる
    return { paths, fallback: false}
}

interface PostParams extends ParsedUrlQuery {
    id: string
}

// getStaticPaths実行後にそれぞれのパスに対してgetStaticPropsが実行される
export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (context) => {
    return {
        props: {
            // paramsにgetStaticPathsで指定した値がそれぞれ入る
            id : context.params![`id`],
        },
    }
}

export default Post