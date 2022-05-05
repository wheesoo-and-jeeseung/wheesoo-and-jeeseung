import React from 'react';

interface DdayProps {
    date: Date
}

export const Dday = ({
        date,
    }: DdayProps) => {

    const today = new Date()
    const diff = date.getTime() - today.getTime()
    const remain = Math.ceil(diff / (1000 * 60 * 60 * 24))
    const dday = remain > 0 ? `D-${remain}` : 'Today'

    return (
        <div>{dday}</div>
    )
}