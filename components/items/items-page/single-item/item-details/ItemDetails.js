import { useEffect, useState } from 'react';
import DropdownSelect from '../../../../shared/pagination/dropdown/DropdownSelect';
import AddToCart from '../add-to-cart/AddToCart';

import { ItemDetailsStyles } from './ItemDetailsStyles';

export default function ItemDetails({
  itemDetails,
  item,
  link,
  id,
  qty,
  setQty,
}) {
  const [value, setValue] = useState(
    itemDetails[0]?.value || null
  );
  const [filteredDetails, setFilteredDetails] = useState(
    []
  );
  const [index, setIndex] = useState(0);

  // define type of item if any
  const type = itemDetails[0]?.type ?? null;

  // generate an array of objects{option, title} to pass to Dropdown component(component accepts object as 1 of an arguments)
  const valuesArr = Array.from(
    new Set(
      itemDetails.reduce(
        (acc, el) => [...acc, el.value],
        []
      )
    )
  ).map(el => (el = { option: el, title: el }));

  // show price according to size of item(if apply)
  const handlePrice = e => {
    // find index of chosen size
    let sizeIndex = filteredDetails.findIndex(
      el => el.size === e.target.value
    );

    // save index to display appropriate price in the component according to it
    setIndex(sizeIndex);
  };

  // filter item details by type(if any)
  useEffect(() => {
    setFilteredDetails(
      itemDetails.filter(el => el.value === value)
    );
    // set index as 0 to select and highlight 1st type-size-value combination
    setIndex(0);
  }, [value]);

  useEffect(() => {
    if (itemDetails) {
      setQty(filteredDetails[index]?.quantity);
    }
  }, [index, filteredDetails]);

  return (
    <ItemDetailsStyles>
      <p className='single-item-price'>
        {(filteredDetails[index]?.price &&
          `$${filteredDetails[index]?.price}`) ||
          (item?.price && `$${item?.price}`)}
      </p>
      {!filteredDetails[index]?.price && !item?.price && (
        <p className='single-item-price-placeholder'>
          Contact us about this item
          {item?.storeLink && (
            <span>
              &nbsp;or find more&nbsp;
              <a href={item?.storeLink} target='_blank'>
                here
              </a>
            </span>
          )}
        </p>
      )}

      {type && (
        <div className='type-select-input'>
          <span>{type}</span>
          {value && (
            <DropdownSelect
              options={valuesArr}
              select={value}
              handleSelect={e => setValue(e.target.value)}
            />
          )}
        </div>
      )}

      {itemDetails[index]?.size && (
        <p className='available-sizes'>Available sizes</p>
      )}

      {filteredDetails.length > 0
        ? filteredDetails?.map(
            (size, i) =>
              size.size && (
                <input
                  key={size.id}
                  className={`size-input-btn ${
                    i === index
                      ? 'size-input-btn active-size-btn'
                      : ''
                  }`}
                  type='button'
                  onClick={handlePrice}
                  value={size.size}
                />
              )
          )
        : item?.size && (
            <input
              className='size-input-btn active-size-btn'
              type='button'
              value={item.size}
            />
          )}

      <AddToCart
        id={id}
        itemDetailsId={filteredDetails[index]?.id || null}
        title={item?.itemTitle}
        price={filteredDetails[index]?.price || item?.price}
        size={filteredDetails[index]?.size || item?.size}
        type={filteredDetails[index]?.type}
        typeValue={filteredDetails[index]?.value}
        link={link}
        qty={qty}
      />
    </ItemDetailsStyles>
  );
}
