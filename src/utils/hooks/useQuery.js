import { useContext } from 'react';
import SearchContext from '../../state/SearchContext';

export const useQuery = () => useContext(SearchContext);
