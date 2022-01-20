import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {
    const [search, setSearch] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateSearchString(''));
        return;
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(search));
        setSearch('');
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
            <Button><span className="fa fa-search" /></Button>
        </form>
    );
};

export default SearchForm;