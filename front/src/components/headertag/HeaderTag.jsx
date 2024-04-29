export default function HeaderTag({ name }) 
{
    let headers = {
        game: 'Выбрать Игру',
        menu: 'Меню',
        owners: 'Владельцы',
        services: 'Услуги',
        rating: 'Рейтинг',
        models: 'Модели',
    }

    return (
        <>{headers[name]}</>
    )
}