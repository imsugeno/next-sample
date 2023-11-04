import { render, screen, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from './index';

describe('Input', () => {
    let renderResult: RenderResult

    beforeEach(() => {
        renderResult = render(<Input label="username" id="username" />)
    })

    afterEach(() => {
        renderResult.unmount()
    })

    it('should empty in input on initial render', () => {
        const inputNode = screen.getByLabelText('username') as HTMLInputElement

        expect(inputNode).toHaveValue('')
    })
})