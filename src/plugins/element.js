import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Table,
  TableColumn,
  Dialog,
  Select,
  Option,
  MessageBox,
  Pagination,
} from 'element-ui'

Vue
  .use(Button).use(Form).use(FormItem).use(Input).use(Dropdown).use(DropdownItem).use(DropdownMenu)
  .use(Menu).use(Submenu).use(MenuItemGroup).use(MenuItem).use(Table).use(TableColumn).use(Dialog)
  .use(Select).use(Option).use(Pagination)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm