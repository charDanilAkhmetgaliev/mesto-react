import React, {useState, useEffect} from "react";
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [formProps, setFormProps] = useState({});
  const [selectedCard, setSelectedCard] = useState({isOpen: false});

  function handleEditAvatarClick()  {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ ...selectedCard, isOpen: false });
  }

  function handleCardClick(cardData) {
    setSelectedCard(cardData);
  }

  function handleOutPopupClick(event) {
    if (event.target.classList.contains('popup')) {
      closeAllPopups();
    }
  }

  useEffect(() => {
    switch (true) {
      case isEditAvatarPopupOpen:
        setFormProps({
          children: (<ul className="popup__inputs">
            <label className="popup__input-field">
              <input id="avatar-url-input" type="url" className="popup__input popup__input_value-type_link"
                     name="avatar" placeholder="Ссылка на картинку" required/>
              <span className="popup__error avatar-url-input-error"></span>
            </label>
          </ul>),
          name: 'avatar-update',
          title: 'Обновить аватар'
        });
        break;
      case isEditProfilePopupOpen:
        setFormProps({
          children: (<ul className="popup__inputs">
            <label htmlFor="" className="popup__input-field">
              <input id="profile-name-input" type="text" className="popup__input popup__input_value-type_name"
                     name="name" minLength="2" maxLength="40" placeholder="Имя пользователя" required/>
              <span className="popup__error profile-name-input-error"></span>
            </label>
            <label className="popup__input-field">
              <input id="profile-status-input" type="text" className="popup__input popup__input_value-type_status"
                     name="about" minLength="2" maxLength="200" placeholder="О себе" required/>
              <span className="popup__error profile-status-input-error"></span>
            </label>
          </ul>),
          name: 'profile-edit',
          title: 'Редактировать профиль'
        });
        break;
      case isAddPlacePopupOpen:
        setFormProps({
          children: (<ul className="popup__inputs">
            <label className="popup__input-field">
              <input id="new-card-name-input" type="text" className="popup__input popup__input_value-type_name"
                     name="name" placeholder="Название" minLength="2" maxLength="30" required/>
              <span className="popup__error new-card-name-input-error"></span>
            </label>
            <label className="popup__input-field">
              <input id="new-card-url-input" type="url" className="popup__input popup__input_value-type_link"
                     name="link" placeholder="Ссылка на картинку" required/>
              <span className="popup__error new-card-url-input-error"></span>
            </label>
          </ul>),
          name: 'card-add',
          title: 'Новое место'
        });
        break;
      default:
        setTimeout(setFormProps, 300, {
          children: undefined,
          name: undefined,
          title: undefined
        });
    }
  }, [isEditProfilePopupOpen, isAddPlacePopupOpen, isEditAvatarPopupOpen])

  return (
    <>
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlac={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick} 
        onCardClick={handleCardClick} 
        onClose={closeAllPopups} 
        />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen || isAddPlacePopupOpen || isEditAvatarPopupOpen}
        name={formProps.name}
        title={formProps.title}
        children={formProps.children}
        onClose={closeAllPopups}
        onOutPopupClick={handleOutPopupClick} 
        />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} onOutPopupClick={handleOutPopupClick}/>
    </>
  )
}

