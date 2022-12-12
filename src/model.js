import image from './assets/image.png'
import { Block } from './classes/blocks'

const text = `Крутые приложения на JavaScript`

export const model = [
    new Block('title', 'Конструктор сайтов на JS', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#FFF',
            'text-align': 'center',
            padding: '1.5rem'
        }}),

    new Block('image', image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        }, 
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }),
    new Block('columns', [
        'Приложение на чистом JS',
        'JavaScript - это просто и интересно',
        'Любые UI своими руками'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new Block('text', text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
]