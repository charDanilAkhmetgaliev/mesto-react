// Селекторы классов
export const rootContainerSelector = '.elements';
export const cardPopupSelector = '.popup_card';
export const formInputSelector = '.popup__input';
export const popupFormSelector = '.popup__form';
export const cardAddPopupSelector = '.popup_new-card';
export const profilePopupSelector = '.popup_edit-profile';
export const userNameSelector = '.profile__name';
export const userInfoSelector = '.profile__status';
export const cardDelPopupSelector = '.popup_card-delete';
export const likeButtonSelector = '.card__like';
export const likeActiveSelector = 'card__like_active';
export const activeDelCardButtonSelector = 'card__delete-button_active';
export const cardSelector = '.card';
export const cardImageSelector = '.card__image';
export const cardTitleSelector = '.card__title';
export const cardLikesCountSelector = '.card__likes-count';
export const cardDelButtonSelector = '.card__delete-button';
export const userAvatarSelector = '.profile__avatar';
export const avatarUpdatePopupSelector = '.popup_avatar-update';
export const popupCloseButtonSelector = '.popup__close-button';
export const popupSubmitButtonSelector = '.popup__save-button';
export const elementsListSelector = 'elements__list';
export const templateElementSelector = '.template';
export const validationSetting = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_error',
  activeErrorClass: 'popup__error_active',
  errorClass: '.popup__error'
}

// данные подключения к серверу
export const url = 'https://mesto.nomoreparties.co/v1';
// данные пользователя
export const userAuthData = {
  userToken: '320b4a75-5470-48e7-b4e8-36be65b57c43',
  cohortName: 'cohort-58'
}
