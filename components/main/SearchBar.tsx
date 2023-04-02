import React from 'react';
import { Search24Filled } from '@fluentui/react-icons'
import { Theme } from '@/styles/theme/Theme';
import * as _ from './style'

interface SearchProps {
  change: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

const SearchBar = ({ change, value }: SearchProps) => {
  return (
    <_.SearchBox>
      <_.SearchInput
        type='text'
        value={value}
        onChange={(e) => change(e.target.value)}
        placeholder='이미지 검색'
      />
      <_.IconBox>
        <Search24Filled primaryFill={Theme.Gray[50]}/>
      </_.IconBox>
    </_.SearchBox>
  )
}

export default SearchBar;