import React from 'react'
import upImage from '../../images/up.svg'
import downImage from '../../images/down.svg'
import onImage from '../../images/on.svg'

// добавить в проект иконки и импортировать
const downIcon = downImage
const upIcon = upImage
const noneIcon = onImage

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    switch (sort) {
        case down: return up;
        case up: return '';
        default: return down;
    } // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))

    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span style={{ display: 'inline-block', paddingLeft: '7px', cursor: 'pointer' }}
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/* сделать иконку */}
            <img id={id + '-icon-' + sort} src={icon} />


        </span>
    )
}

export default SuperSort
