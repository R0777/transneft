import React, { useState, useEffect } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import styles from "./styles.module.scss";

const Contacts = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('Abc');

  const fetchData = async () => {
    try {
      const response = await fetch('./FormData.js');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Ошибка вывода:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const sortData = (columnName) => {
    const isAbc = sortColumn === columnName && sortOrder === 'Abc';

    const sortedData = [...data].sort((first, second) => {
      if (first[columnName] < second[columnName]) return isAbc ? -1 : 1;
      if (first[columnName] > second[columnName]) return isAbc ? 1 : -1;
      return 0;
    });

    setData(sortedData);
    setSortColumn(columnName);
    setSortOrder(isAbc ? 'Cba' : 'Abc');
  };

  return (
    <div className={styles.container}>
      <div className={styles.table_container}>
        <Table striped bordered hover className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th onClick={() => sortData('name')}><span>Сотрудники</span></th>
              <th onClick={() => sortData('phone')}><span>Телефон</span></th>
              <th onClick={() => sortData('position')}><span>Должность</span></th>
            </tr>
          </thead>
        <tbody className={styles.tbody}>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.position}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
      <div className={styles.pagination_container}>
        <Pagination className={styles.pagination}>
        {[...Array(Math.ceil(data.length / itemsPerPage))].map((_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
            className={styles.page_item}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
    </div>
  );
};

export default Contacts;
