import { inertHtml as ih } from 'foldkit/html'

import { Menu } from '@foldkit/ui'

type Action = 'Rename' | 'Duplicate' | 'Inbox' | 'Archive' | 'Delete'

const ActionMenu = Menu.create<Action>()

const items: ReadonlyArray<Menu.Entry<Action>> = [
  'Rename',
  'Duplicate',
  Menu.submenu<Action>({
    id: 'organize',
    label: 'Organize',
    items: ['Inbox', 'Archive'],
  }),
  'Delete',
]

const viewInputs: Menu.ViewInputs<Action> = {
  items,
  buttonContent: ih.span([], ['Actions']),
  itemToConfig: action => ({ content: ih.span([], [action]) }),
  submenuToConfig: entry => ({ content: ih.span([], [entry.label]) }),
}

export { ActionMenu, viewInputs }
