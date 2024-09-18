
import { Menubar } from 'primereact/menubar';

export function TextEditorMenuBar() {
  const items = [
    {
      label: 'File',
      items: [
        { label: 'New', icon: 'pi pi-fw pi-plus' },
        { label: 'Open', icon: 'pi pi-fw pi-download' },
        { label: 'Save', icon: 'pi pi-fw pi-save' },
        { label: 'Exit', icon: 'pi pi-fw pi-times' },
      ],
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', icon: 'pi pi-fw pi-undo' },
        { label: 'Redo', icon: 'pi pi-fw pi-redo' },
      ],
    },
    {
      label: 'View',
      items: [
        { label: 'Zoom In', icon: 'pi pi-fw pi-search-plus' },
        { label: 'Zoom Out', icon: 'pi pi-fw pi-search-minus' },
      ],
    },
    {
      label: 'Insert',
      items: [
        { label: 'Image', icon: 'pi pi-fw pi-image' },
        { label: 'Table', icon: 'pi pi-fw pi-table' },
      ],
    },
    {
      label: 'Format',
      items: [
        { label: 'Bold', icon: 'pi pi-fw pi-bold' },
        { label: 'Italic', icon: 'pi pi-fw pi-italic' },
      ],
    },
  ];

  return (
    <div className="card w-[500px] p-0">
      <Menubar model={items} style={{ width: "500px", }} className="bg-white rounded-lg"/>
    </div>
  );
};

export default TextEditorMenuBar;
