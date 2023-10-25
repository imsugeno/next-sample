import { useState, useCallback } from 'react';
import { Button } from './buttonComponent';
import { text } from 'stream/consumers';

// ポップアップを表示するためのHook
const usePopup = () => {
    const cb = useCallback((text: string) => {
        prompt(text)
    }, [])

    return cb
}

type CountButtonProps = {
    label: string
    maximum: number
}

// クリックされた回数を表示するボタンを表示するコンポーネント
export const CountButton = (props: CountButtonProps) => {
    const { label, maximum } = props

    const displayProps = usePopup()

    const [count, setCount] = useState(0)

    const onClick = useCallback(() => {
        const newCount = count + 1
        setCount(newCount)

        if (newCount >= maximum) {
            displayProps(`You've clicked ${newCount} times!`)
        }
    }, [count, maximum])

    const disabled = count >= maximum
    const text = disabled
        ? 'Cannot click anymore'
        : `You've clicked ${count} times!`
    
    return (
        <Button disabled={disabled} label={label} text={text} onClick={onClick} />
    )
}