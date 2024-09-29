import React from 'react';

import { Foreground } from '@/components/home-foreground';
import { HomeHeaderBar } from '@/components/home-header-bar';
import ParallaxScrollView from '@/components/parallax-scrollview';
import { Text } from '@/ui';

const PARALLAX_HEIGHT = 330;
const HEADER_BAR_HEIGHT = 110;
const SNAP_START_THRESHOLD = 70;
const SNAP_STOP_THRESHOLD = 330;

export default function Home() {
  return (
    <ParallaxScrollView
      parallaxHeight={PARALLAX_HEIGHT}
      headerHeight={HEADER_BAR_HEIGHT}
      snapStartThreshold={SNAP_START_THRESHOLD}
      snapStopThreshold={SNAP_STOP_THRESHOLD}
      ForegroundComponent={<Foreground />}
      HeaderBarComponent={<HomeHeaderBar />}
    >
      <Text>{MOCK_TEXT}</Text>
    </ParallaxScrollView>
  );
}

export const MOCK_TEXT = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis, tellus nec blandit iaculis, velit mi cursus nibh, semper ullamcorper sem eros blandit lacus. Quisque placerat vitae ex eu vestibulum. Phasellus a nibh a eros vestibulum venenatis ut eu ante. Mauris at ligula a mi molestie consequat non ut ipsum. Nulla iaculis sem diam, nec mollis nisi posuere quis. Sed gravida elementum ipsum quis elementum. Integer scelerisque urna id orci vehicula, id rutrum nisi tincidunt. Vivamus accumsan dolor ut ornare interdum. Vestibulum lacus quam, tempus eget volutpat id, rhoncus ac sapien. Nunc elit mauris, vestibulum in cursus eget, elementum vel ligula. Proin ultrices nibh neque, vitae lobortis massa sodales ut. Praesent a nisl vitae tortor pretium maximus. Sed euismod cursus massa et dictum. Nullam quis massa eleifend est semper ornare. Suspendisse justo sem, dictum id convallis in, bibendum et nisl. Quisque scelerisque augue nec venenatis ornare.

Nulla facilisi. Vestibulum tempor varius dolor, non condimentum lorem lacinia eu. Suspendisse dictum luctus facilisis. Suspendisse vehicula eget justo vitae viverra. Aenean eu augue quis massa faucibus auctor et ut metus. Praesent tincidunt risus ut ex convallis, non aliquam tortor euismod. Vestibulum congue, lorem vel vulputate tempus, enim magna eleifend orci, id semper diam orci at lorem. Curabitur eget metus faucibus neque facilisis scelerisque.

Proin in mi scelerisque, luctus ante vel, rutrum odio. Curabitur placerat sit amet dui in fringilla. Morbi bibendum feugiat ultrices. Mauris pharetra ullamcorper ante vel semper. Mauris pulvinar, purus non egestas ornare, nibh purus vestibulum enim, nec feugiat nibh orci non ante. Praesent elementum mattis elit, eget facilisis dolor. Ut eget posuere lacus, nec ultricies dolor. Nunc a nunc eu felis dictum molestie. Etiam bibendum, dolor at vestibulum ornare, nisi lorem pharetra odio, in lacinia orci mi non odio. Vestibulum quis vulputate augue, finibus elementum odio. Vestibulum quis porttitor enim, nec dapibus risus. In hac habitasse platea dictumst.

Nunc sollicitudin viverra sem at imperdiet. In condimentum quam eu hendrerit porta. Ut rutrum odio est, quis placerat elit interdum non. Fusce mattis iaculis tincidunt. Cras pharetra tortor sit amet massa scelerisque, nec egestas turpis eleifend. Aenean dapibus, nulla accumsan imperdiet imperdiet, nisl lacus malesuada nibh, a sagittis arcu felis nec nisl. Suspendisse porttitor ipsum in augue euismod, sed auctor erat pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque sagittis euismod nulla at ullamcorper.

Fusce id nisi gravida nulla commodo accumsan gravida at nunc. Aliquam dapibus sit amet massa a bibendum. Morbi id lacus a lectus elementum varius. Maecenas id dui ornare, rhoncus nibh id, accumsan mauris. Ut purus libero, porta eu porta in, placerat in magna. Fusce vel diam nibh. Nam porttitor, sapien nec congue fermentum, ligula tellus luctus massa, eu posuere nibh diam nec augue. Vivamus eget interdum sapien. Suspendisse convallis ullamcorper pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Duis felis lacus, convallis at mauris eget, bibendum sollicitudin arcu. Mauris in purus vel ex finibus auctor eget vitae purus. Pellentesque vitae neque ac dui eleifend sollicitudin.

Ut ultrices turpis neque, sed laoreet odio rutrum nec. Nulla facilisi. Aenean vel imperdiet sapien. Curabitur sed orci ullamcorper, pretium orci quis, consectetur nulla. Morbi auctor mi sed magna congue, eu dignissim nisi elementum. Donec sed maximus dui, a accumsan est. Cras sodales, lectus vel pretium facilisis, metus nibh mollis magna, id dignissim nisl dui at velit.

Cras ornare, justo sit amet dignissim mollis, nunc leo aliquam risus, vel ultricies libero turpis vitae metus. Pellentesque posuere rhoncus nibh, ut volutpat erat auctor egestas. Sed eget felis et ipsum ultricies varius. Donec eu ipsum lorem. Cras in odio quis massa tempus pellentesque. Maecenas in mollis nisi. Sed ante nibh, pulvinar vitae leo eget, accumsan accumsan risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae consectetur orci. Vestibulum dui odio, aliquam quis mauris eu, pulvinar sagittis nunc. Integer placerat nisi lorem. Sed in felis magna. Pellentesque vitae mauris erat. Quisque quis lectus faucibus, tincidunt sapien nec, aliquet augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Quisque consectetur eros at erat ornare commodo. Duis luctus mauris quis blandit viverra. Phasellus nec maximus purus. Suspendisse potenti. Suspendisse felis est, consectetur quis gravida tempor, aliquam sed metus. Donec laoreet urna viverra mi tincidunt, eget rhoncus neque viverra. Vivamus ligula arcu, aliquet ut molestie nec, euismod quis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Donec et consequat tellus. Nam et ipsum volutpat, fringilla nisi vel, eleifend ex. Ut volutpat aliquet ultricies. Aenean ullamcorper nunc in tincidunt sagittis. Aliquam rhoncus nulla sed eros consectetur vulputate. Mauris eget urna vitae nulla condimentum posuere sed eu tellus. Nulla egestas fermentum mattis. In ac diam vitae ex euismod lacinia. Vestibulum ac interdum erat, et hendrerit leo. Proin ante felis, sodales vel eros condimentum, ultrices volutpat nisl.

Proin ultrices, ex porta feugiat posuere, dui dolor pulvinar purus, vel iaculis eros tortor a nunc. Sed vitae enim et nunc luctus interdum. Nunc nisl enim, maximus vel nulla at, rhoncus tincidunt dolor. Nulla molestie elit sed est ornare accumsan. Nullam porta, ante non porttitor dignissim, diam lectus vulputate neque, non dignissim enim nulla sed lacus. Proin mauris erat, placerat ac orci sit amet, porta consectetur diam. Maecenas eget est convallis, tristique lectus non, tempus mauris. Etiam tincidunt tempus orci, ut sollicitudin dui convallis quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur efficitur est dolor, vel accumsan ligula molestie sed.

Praesent sed efficitur dui. Donec fringilla elit sit amet commodo viverra. Morbi ac congue augue. Donec sodales sapien sit amet erat congue facilisis. Nulla condimentum quam quis metus aliquet suscipit. Nulla nulla ipsum, faucibus in malesuada vitae, suscipit quis sem. Sed vitae risus nisl. Duis molestie libero non posuere facilisis. Vivamus tempor, mauris quis ornare eleifend, purus magna sollicitudin massa, in luctus ex arcu in massa. Mauris sit amet diam lacinia libero ultricies pharetra id a felis. Quisque diam dolor, placerat ac suscipit eu, euismod at purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras varius nulla non eros placerat, nec tristique urna porta. Pellentesque porta cursus rutrum. Integer sit amet ipsum eu lectus accumsan luctus. Suspendisse potenti. Integer pellentesque dolor a elit vulputate, sed consequat justo hendrerit. Aenean lectus nunc, posuere vel viverra in, sagittis ac ex. In hendrerit consectetur lectus, vitae mattis eros laoreet id. Phasellus facilisis leo dolor. Etiam et congue diam.

Fusce massa nibh, euismod vel hendrerit sagittis, maximus id lorem. Nunc ultrices diam ac quam tincidunt lacinia. Nam consectetur tortor eu metus faucibus, ut auctor ipsum aliquam. Curabitur euismod fermentum mauris. Donec pellentesque quis turpis eget feugiat. Vestibulum faucibus tempus magna, consequat placerat massa laoreet quis. Donec placerat turpis eget efficitur convallis. Phasellus vel interdum tellus. Curabitur cursus metus eget gravida pellentesque.

Ut vitae purus ipsum. Duis ac libero mattis, rhoncus mauris a, aliquam ligula. Aenean id odio ac felis venenatis pretium eu in risus. Suspendisse bibendum lacinia erat, a rutrum lacus pharetra in. Vestibulum faucibus tortor at laoreet gravida. Integer maximus at justo eu euismod. Praesent laoreet elit id ex faucibus auctor. Maecenas aliquam condimentum orci, fermentum tristique neque rutrum vel. Aliquam erat volutpat. Aliquam vel malesuada tortor, id volutpat odio. Suspendisse potenti. In varius, nibh eu rutrum suscipit, odio odio cursus orci, ut volutpat metus risus quis nulla.

Phasellus odio lacus, sodales nec arcu ac, malesuada finibus nisl. Donec vitae tellus quis ante euismod placerat nec id purus. Maecenas iaculis felis et mauris malesuada, at aliquet dolor sollicitudin. In sodales justo quis metus accumsan, dapibus cursus lorem cursus. Aliquam vel sagittis mauris. Quisque in quam vitae nunc scelerisque tincidunt sed et orci. Mauris ullamcorper nisl justo, a auctor ante blandit vitae. Cras enim odio, sodales quis pretium sed, lacinia quis purus. Duis ac elit ac lacus lobortis maximus. Vivamus rutrum elit ullamcorper, pharetra elit in, sagittis libero. Fusce pharetra metus eget ligula sagittis, in pretium sapien malesuada. Nullam a ligula eu mauris finibus pharetra ac eget purus.
`;
