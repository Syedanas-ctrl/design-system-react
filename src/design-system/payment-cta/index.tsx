import clsx from "clsx";
import Button from "../button";
import { PaletteType, TextPalette } from "../color/types";
import { FontType } from "../text/types";
import { IPrice } from "@/types/price";
import { useTrans } from "@/hooks/translation";
import { Trans } from "react-i18next";
import Text from "../text";
import Icon from "../icon";
import { calculatePercentage, formatNumbertoRupee } from "@/utils/price";

const PaymentCta = ({
  price,
  onPress,
  disableButton = false,
}: {
  price: IPrice;
  onPress: () => void;
  disableButton?: boolean;
}) => {
  const { t } = useTrans('common');
  const discountPercentage = calculatePercentage(price.sellingPrice, price.listingPrice);
  return (
    <section className='w-full md:w-128 shadow-evenly overflow-hidden'>
      {price.listingPrice - price.sellingPrice > 0 && (
        <div className='flex items-center gap-2 bg-palette-SUCCESS_700 py-2 px-4'>
          <Icon name='percent' size='s' color={PaletteType.GREYS_100} />
          <Text color={TextPalette.LIGHT_1} font={FontType.SMALL_L}>
            <Trans
              i18nKey='total-savings'
              ns={'rx'}
              values={{
                price: Math.round(price.listingPrice - price.sellingPrice),
              }}
              components={{
                1: <span className='font-semibold' />,
              }}
            />
          </Text>
        </div>
      )}
      <div className='flex justify-between px-4 py-3 bg-white'>
        {price.sellingPrice > 0 || price.listingPrice > 0 ? (
          <div className='flex flex-col w-[50%] justify-center'>
            <div className={`flex ${discountPercentage > 0 ? 'block' : 'hidden'}`}>
              <Text
                className={`line-through`}
                font={FontType.SMALL_L}
                color={TextPalette.DARK_2}>
                ₹{formatNumbertoRupee(price.listingPrice)}
              </Text>
            </div>
            <Text
              color={TextPalette.DARK_1}
              font={FontType.H3_B}
              className='flex items-center justify-start'>
              ₹{price.sellingPrice}
            </Text>
          </div>
        ) : (
          <></>
        )}
        <div className={clsx(price.sellingPrice > 0 || price.listingPrice > 0 ? 'w-[50%]' : 'w-full')}>
          <Button
            onClick={onPress}
            disabled={disableButton}
            text={price.sellingPrice > 0 ? t('confirm-and-pay') : t('confirm')}
            type='primary'
            view='text'
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentCta;
