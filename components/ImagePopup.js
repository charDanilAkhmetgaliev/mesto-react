export default function ImagePopup({ card, onClose, onOutPopupClick }) {
  return (
    <div className={`popup popup_card ${card.isOpen ? 'popup_opened-card' : ''}`} onClick={onOutPopupClick}>
      <div className="popup__container">
        <img src={card.link} alt={`Изображение ${card.name}`} className="popup__image" />
        <figcaption className="popup__label">{card.name}</figcaption>
        <button type="button" className="popup__close-button" aria-label="Закрыть" onClick={onClose}></button>
      </div>
    </div>
  )
}