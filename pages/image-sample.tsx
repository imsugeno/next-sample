import { NextPage } from 'next'
import Image from 'next/image'

import SmpleImage from '../public/images/sample.jpg'

const ImageSmaple: NextPage<void> = (props) => {
    return (
        <div>
            <h1>画像表示の比較</h1>
            <p>imgタグ</p>
            <img src="/images/sample.jpg" />
            <p>Imageコンポーネント</p>
            <Image src={SmpleImage} alt=""/>
            <p>Imageで表示した場合は事前に描画エリアが確保されます</p>
        </div>
    )
}

export default ImageSmaple