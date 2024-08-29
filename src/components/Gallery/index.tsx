import Section from '../Section'

import { Item, Items, Action } from './styles'

import hogwartsImg from '../../assets/images/hogwartsLegacy.png'
import modal from '../../assets/images/modal.png'
import spideman from '../../assets/images/banner-homem-aranha.png'
import play from '../../assets/images/botao-play.png'
import zoom from '../../assets/images/mais-zoom.png'
import fechar from '../../assets/images/close.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: hogwartsImg
  },
  {
    type: 'image',
    url: modal
  },
  {
    type: 'image',
    url: spideman
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/78CP8na1Fpo?si=AVzjDe4SRREExjkt'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia de ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <div>
        <div>
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="Fechar" />
          </header>
          <img src={modal} />
        </div>
      </div>
    </>
  )
}

export default Gallery
