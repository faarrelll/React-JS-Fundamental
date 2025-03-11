import { Component } from "react";
import SimpleListComponent from "./SimpleListComponent";
import CenterContainerComponent from "../../components/CenterContainerComponent";

const LIST = [
  { id: "UUID-1", name: "Bakso Urat", price: 15_000 },
  { id: "UUID-2", name: "Bakso Gepeng", price: 17_000 },
  { id: "UUID-3", name: "Es Teh", price: 3_000 },
  { id: "UUID-4", name: "Jeruk Hangat", price: 5_000 },
];

const LIST_WITH_GENERATED_UNIQUE_ID = [
  { id: crypto.randomUUID(), name: "Bakso Urat", price: 15_000 },
  { id: crypto.randomUUID(), name: "Bakso Gepeng", price: 17_000 },
  { id: crypto.randomUUID(), name: "Es Teh", price: 3_000 },
  { id: crypto.randomUUID(), name: "Jeruk Hangat", price: 5_000 },
];

const JSX_LIST = [
  <li key="list-1">List Item 1</li>,
  <li key="list-2">List Item 2</li>,
  <li key="list-3">List Item 3</li>,
];

export class ListDemoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: LIST,
    };

    // forbidden
    // this.state.menuList.push({})
  }

  onDeleteItem(id) {
    return () => {
      this.setState({
        // lestarikan item-item selain id yang di delete
        list: this.state.list.filter((item) => item.id !== id),
      });
    };
  }

  render() {
    return (
      <CenterContainerComponent>
        {/* jangan pakai index untuk key, baiknya pakai sesuatu yang unik yg merepresentaki identitas elementnya
        karena urutan element di list yang dinamis bisa berubah2,
        by default kalau tidak ada key dia akan pakai index */}
        <ul>
          {JSX_LIST}
          <br />
          {LIST.map((menu, _index) => (
            <li key={menu.id}>
              id: {menu.id} - name: {menu.name} - price: {menu.price}
            </li>
          ))}
          <br />
          {LIST_WITH_GENERATED_UNIQUE_ID.map((menu, _index) => (
            <li key={menu.id}>
              id: {menu.id} - name: {menu.name} - price: {menu.price}
            </li>
          ))}
          <br />
          <SimpleListComponent data={LIST} />
          <br />
          <SimpleListComponent
            data={this.state.list}
            // Lifting State Up (https://legacy.reactjs.org/docs/lifting-state-up.html)
            // Cara supaya CHILD component bisa UBAH data PARENT component
            // setState parent ditransfer lewat props akhirnya terwujud
            onDeleteItem={this.onDeleteItem.bind(this)}
          />
        </ul>
      </CenterContainerComponent>
    );
  }
}

export default ListDemoComponent;
