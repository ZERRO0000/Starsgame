export default function HeaderTag({ name }) 
{
    let headers = {
        game: 'Игра',
        owners: 'Владельцы',
        services: 'Услуги',
        rating: 'Рейтинг',
        models: 'Модели',
    }

    return (
        <>{headers[name]}</>
    )
}