import Section from '../Section'

import { Item, Items, Action } from './styles'

import hogwartsImg from '../../assets/images/hogwartsLegacy.png'
import modal from '../../assets/images/modal.png'
import spideman from '../../assets/images/banner-homem-aranha.png'
import play from '../../assets/images/botao-play.png'
import zoom from '../../assets/images/mais-zoom.png'

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
}

const Gallery = ({ defaultCover }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  return (
    <Section title="Galeria" background="black">
      <Items>
        {mock.map((media, index) => (
          <Item key={media.url}>
            <img
              src={getMediaCover(media)}
              alt={`Mídia de ${index + 1} Nome do Jogo`}
            />
            <Action>
              <img src={zoom} alt="Clique para maximizar a imagem" />
            </Action>
          </Item>
        ))}
      </Items>
    </Section>
  )
}

export default Gallery
