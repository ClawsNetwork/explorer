import ClawSymbol from 'assets/img/tokens/claw-symbol.svg';
import EgldSymbol from 'assets/img/tokens/egld-symbol.svg';
import SpcLogo from 'assets/img/tokens/spc-logo.svg';
import { isEgldToken } from 'helpers';
import { SVGProps } from 'react';
import { useSelector } from 'react-redux';
import { activeNetworkSelector } from 'redux/selectors';

// temporary?
export const NativeTokenSymbol = (props: SVGProps<SVGSVGElement>) => {
  const { egldLabel } = useSelector(activeNetworkSelector);

  if (isEgldToken(egldLabel)) {
    return <EgldSymbol {...props} />;
  }

  switch (egldLabel?.toLowerCase()) {
    case 'spc':
      return <SpcLogo {...props} />;
    case 'claw':
      return <ClawSymbol {...props} />;
    default:
      return null;
  }
};
