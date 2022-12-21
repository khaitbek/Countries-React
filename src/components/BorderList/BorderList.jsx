import Button from '@components/Button/Button';
import uuid from 'react-uuid';
import {useTranslation} from "react-i18next";
import "./border-list.css";

function BorderList({ borders, ...props }) {
  const {t} = useTranslation();
  return <div className="country-borders">
    {t("borders")}:
    <ul className="country-border-list">
      {borders.map(border => (
        <li className="country-border-item" key={uuid()}>
          <Button className="country-border-btn" text={border} />
        </li>
      ))}
    </ul>
  </div>
}

export default BorderList;