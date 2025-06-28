export * from "./ModalSlideReduxSummary";

export const DemoSlideA: React.FC = () => {
  return (
    <>
      <h4>First Demo Slide</h4>
      <p>The next slide will have more content</p>
    </>
  );
};

export const DemoSlideB: React.FC = () => {
  return (
    <>
      <h4>Second Demo Slide</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacus
        fringilla, lobortis tellus vel, posuere erat. Donec purus diam, ornare
        vitae vehicula in, placerat sed neque. Vestibulum sem ligula, tempus
        convallis luctus hendrerit, egestas ut nisi. Nam eu est nisl. Nulla
        facilisi. Phasellus ut viverra tortor. Donec vestibulum gravida leo ut
        dictum. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Aenean molestie mauris id nibh efficitur, a
        vulputate nulla malesuada. Maecenas pretium tortor non viverra
        venenatis. Aenean eu metus ut augue suscipit commodo bibendum vel metus.
        Vivamus vel nulla maximus, ultricies turpis et, auctor est.
      </p>
      <p>
        Aenean in tellus cursus, suscipit libero a, bibendum augue. Suspendisse
        dignissim diam aliquet tempus scelerisque. Sed feugiat risus eu sapien
        posuere, vel blandit leo ornare. Nunc non auctor turpis. Aliquam
        dignissim pulvinar mi quis sagittis. Ut non feugiat ante. Donec eget
        libero sit amet urna efficitur luctus. Pellentesque condimentum egestas
        erat sed rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacus
        fringilla, lobortis tellus vel, posuere erat. Donec purus diam, ornare
        vitae vehicula in, placerat sed neque. Vestibulum sem ligula, tempus
        convallis luctus hendrerit, egestas ut nisi. Nam eu est nisl. Nulla
        facilisi. Phasellus ut viverra tortor. Donec vestibulum gravida leo ut
        dictum. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Aenean molestie mauris id nibh efficitur, a
        vulputate nulla malesuada. Maecenas pretium tortor non viverra
        venenatis. Aenean eu metus ut augue suscipit commodo bibendum vel metus.
        Vivamus vel nulla maximus, ultricies turpis et, auctor est.
      </p>
      <p>
        Aenean in tellus cursus, suscipit libero a, bibendum augue. Suspendisse
        dignissim diam aliquet tempus scelerisque. Sed feugiat risus eu sapien
        posuere, vel blandit leo ornare. Nunc non auctor turpis. Aliquam
        dignissim pulvinar mi quis sagittis. Ut non feugiat ante. Donec eget
        libero sit amet urna efficitur luctus. Pellentesque condimentum egestas
        erat sed rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacus
        fringilla, lobortis tellus vel, posuere erat. Donec purus diam, ornare
        vitae vehicula in, placerat sed neque. Vestibulum sem ligula, tempus
        convallis luctus hendrerit, egestas ut nisi. Nam eu est nisl. Nulla
        facilisi. Phasellus ut viverra tortor. Donec vestibulum gravida leo ut
        dictum. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Aenean molestie mauris id nibh efficitur, a
        vulputate nulla malesuada. Maecenas pretium tortor non viverra
        venenatis. Aenean eu metus ut augue suscipit commodo bibendum vel metus.
        Vivamus vel nulla maximus, ultricies turpis et, auctor est.
      </p>
      <p>
        Aenean in tellus cursus, suscipit libero a, bibendum augue. Suspendisse
        dignissim diam aliquet tempus scelerisque. Sed feugiat risus eu sapien
        posuere, vel blandit leo ornare. Nunc non auctor turpis. Aliquam
        dignissim pulvinar mi quis sagittis. Ut non feugiat ante. Donec eget
        libero sit amet urna efficitur luctus. Pellentesque condimentum egestas
        erat sed rutrum.
      </p>
    </>
  );
};

export const DemoSlideC: React.FC = () => {
  return (
    <>
      <h4>Third Demo Slide</h4>
      <p>
        <b>Lorem ipsum dolor sit amet,</b> consectetur adipiscing elit. Nullam
        et lacus fringilla, lobortis tellus vel, posuere erat. Donec purus diam,
        ornare vitae vehicula in, placerat sed neque. Vestibulum sem ligula,
        tempus convallis luctus hendrerit, egestas ut nisi. Nam eu est nisl.
        Nulla facilisi. Phasellus ut viverra tortor. Donec vestibulum gravida
        leo ut dictum. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Aenean molestie mauris id nibh
        efficitur, a vulputate <b>nulla</b> malesuada. Maecenas pretium tortor
        non viverra venenatis. Aenean eu metus ut augue suscipit commodo
        bibendum vel metus. Vivamus vel nulla maximus, ultricies turpis et,
        auctor est.
      </p>
      <p>
        Aenean in tellus cursus, suscipit libero a, bibendum augue. Suspendisse
        dignissim diam aliquet tempus scelerisque. Sed feugiat risus eu sapien
        posuere, vel blandit leo ornare. Nunc non auctor turpis. Aliquam
        dignissim pulvinar mi quis sagittis. Ut non feugiat ante. Donec eget
        libero sit amet urna efficitur luctus. Pellentesque condimentum egestas
        erat sed rutrum.
      </p>
    </>
  );
};

export const DemoSlideD: React.FC = () => {
  return (
    <>
      <h4>Fourth Demo Slide</h4>
      <p>There isn't anything special about this slide.</p>
    </>
  );
};

export const DemoSlideLightA: React.FC = () => {
  return (
    <>
      <h4>Light Modal Demo</h4>
      <p>This is an example of a modal with a light color theme.</p>
      <p>
        Please notice that two custom actions have been placed on the modal
        navigation.
      </p>
      <p>
        The custom actions will change the color theme of the entire app to
        either "dark" or "light" respectfully.
      </p>
      <p>
        They will disapear on the next two slides and reapper on the final
        slide.
      </p>
    </>
  );
};

export const DemoSlideLightB: React.FC = () => {
  return (
    <>
      <h4>Last Slide of the Light Modal</h4>
      <p>This is the last slide of the Light Modal Demo.</p>
      <p>The custom actions are back.</p>
      <p>
        You can click them all you like to change the theme to either "dark" or
        "light".
      </p>
      <p>
        Feel free to close the modal by either clicking on the close button, the
        X in the top right corner, or the lightbox background.
      </p>
      <p>Then you can check another demo out!</p>
      <p>
        Or hit the back button. I won't judge, because I'm just text in a{" "}
        <span className="bold">p</span> element.
      </p>
    </>
  );
};

export const DemoSlideDarkA: React.FC = () => {
  return (
    <>
      <h4>Dark Modal Demo</h4>
      <p>This is an example of a modal with a dark color theme.</p>
      <p>
        Please notice that two custom actions have been placed on the modal
        navigation.
      </p>
      <p>
        The custom actions will change the color theme of the entire app to
        either "dark" or "light" respectfully.
      </p>
      <p>
        They will disapear on the next two slides and reapper on the final
        slide.
      </p>
    </>
  );
};

export const DemoSlideDarkB: React.FC = () => {
  return (
    <>
      <h4>Dark Modal Demo's</h4>
      <p>This is the last slide of the Dark Modal Demo.</p>
      <p>The custom actions are back.</p>
      <p>
        You can click them all you like to change the theme to either "dark" or
        "light".
      </p>
      <p>
        Feel free to close the modal by either clicking on the close button, the
        X in the top right corner, or the lightbox background.
      </p>
      <p>Then you can check another demo out!</p>
      <p>
        Or hit the back button. I won't judge, because I'm just text in a{" "}
        <span className="bold">p</span> element.
      </p>
      <p>
        I should have made a pun about sunsetting the dark theme modal demo.
      </p>
    </>
  );
};

export const DemoSlideSuccess: React.FC = () => {
  return (
    <>
      <h4>Confirmed!</h4>
      <p>Well there is nothing to actually confirm.</p>
      <p>This is just an example Success Modal.</p>
      <p>Have a great day.</p>
    </>
  );
};
