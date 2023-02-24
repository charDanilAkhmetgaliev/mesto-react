import {useEffect, useState} from "react";
import {api} from '../utils/Api.js';
import Card from './Card.js';

export default function Main({ onEditAvatar, onEditProfile, onAddPlac, onCardClick, onClose }) {
  const [userName, setUserName] = useState('User name');
  const [userDescription, setUserDescription] = useState('User description');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo().then(({ name, about, avatar }) => {
      setUserName(name);
      setUserDescription(about);
      setUserAvatar(avatar);
    })

    api.getCardsData().then(cardsData => {
      const newCards = cardsData.reverse().map(({ _id, name, link, likes }) => {
        return {
          _id,
          name,
          link,
          likes
        }
      });
      setCards(newCards);
    });
  }, [])

  return (
    <main className="content" onKeyDown={(e) => (e.key === 'Escape' || e.key === 'Esc') ? onClose() : ''}>
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" />
            <div className="profile__avatar-overlay"></div>
            <button className="profile__edit-avatar-button" onClick={onEditAvatar} type="button" aria-label="Изменить аватар"></button>
          </div>
          <div className="profile__info">
            <div className="profile__info-container">
              <h1 className="profile__name" aria-label='Имя пользователя'>{userName}</h1>
              <button className="profile__edit-button" onClick={onEditProfile} type="button" aria-label="Редактировать"></button>
            </div>
            <p className="profile__status">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" onClick={onAddPlac} type="button" aria-label="Добавить"></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {
            cards.map(({ _id, ...props}) => <Card key={_id} onCardClick={onCardClick} { ...props } />)
          }
        </ul>
      </section>
    </main>
  )
}