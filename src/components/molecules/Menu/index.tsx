// External libs

// Assets

// Componentes
import Link from '@/components/atoms/Link'
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
export interface IMenuProps {
  isMenuToggle: boolean
}

const links = [
  {
    type: 'Anchor',
    title: 'Home',
    href: '#'
  },
  {
    type: 'Anchor',
    title: 'Best price',
    href: '#'
  },
  {
    type: 'Anchor',
    title: 'Apps',
    href: '#'
  },
  {
    type: 'Anchor',
    title: 'Roadmap',
    href: '#'
  },
  {
    type: 'Anchor',
    title: 'Team',
    href: '#'
  },
  {
    type: 'Anchor',
    title: 'Partners',
    href: '#'
  },
  {
    type: 'Anchor',
    title: 'Liquidity Farm',
    href: '#'
  }
]

const Menu: React.FC<IMenuProps> = ({ isMenuToggle }) => {
  return (
    <Styled.Container isMenuToggle={isMenuToggle}>
      {links.map(item => (
        <Styled.MenuItem key={item.title}>
          <Link href={item.href}>
            <Typography as="body2">{item.title}</Typography>
          </Link>
        </Styled.MenuItem>
      ))}
    </Styled.Container>
  )
}

export default Menu
