import './style.css'

type ArrowsBlockProps = {
  onClick: (direction: string) => void
}

export const ArrowsBlock: React.FC<ArrowsBlockProps> = ({ onClick: onClickHandler }) => {
  return (
    <>
      <div className='arrowsBlock'>
        <p className='arrowLeft' onClick={() => onClickHandler('back')}>
          ←
        </p>
        <p className='arrowRight' onClick={() => onClickHandler('forward')}>
          →
        </p>
      </div>
    </>
  )
}
