import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phone-selector';
import { filtered } from '../../redux/slices/filter';
import s from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onchangeFilter = e => dispatch(filtered(e.currentTarget.value));

  return (
    <div className={s.section}>
      <span className={s.text}> Фильтр по имени</span>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={onchangeFilter}
      ></input>
    </div>
  );
}
