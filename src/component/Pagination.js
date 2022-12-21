function Pagination(props) {
    const pages = [];
  
    for (let i = 0; i < props.numPage; i++) {
      pages.push(i + 1);
    }
  
    return (   
        <ul className="pagination pagination-sm mb-0">
            <li className="page-item " >
                <button className="page-link">
                    <i className = "fa-solid fa-angle-left small" />
                </button>
            </li>
            {pages.map(item => (
        <li className="page-item">
          <button className="page-link">{item}</button>
        </li>
      ))}
            <li className="page-item " >
                <button className="page-link">
                    <i className = "fa-solid fa-angle-right small" />
                </button>
            </li>
  </ul>     
        );
    }
    export default Pagination;