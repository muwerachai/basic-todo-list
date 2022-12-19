function Pagination() {
    return (   
        <ul className="pagination pagination-sm mb-0">
            <li class="page-item " >
                <button class="page-link">
                    <i className = "fa-solid fa-angle-left small" />
                </button>
            </li>
            <li class="page-item active" >
                <button class="page-link">1</button>
            </li>
            <li class="page-item " >
                <button class="page-link">2</button>
            </li>
            <li class="page-item " >
                <button class="page-link">3</button>
            </li>
            <li class="page-item " >
                <button class="page-link">
                    <i className = "fa-solid fa-angle-right small" />
                </button>
            </li>
  </ul>     
        );
    }
    export default Pagination;