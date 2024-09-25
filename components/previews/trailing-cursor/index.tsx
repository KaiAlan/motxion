'use client'

import TrailingCursor from "./trailing-cursor";

const TrailingCursorDemo = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="h-[500px] pt-40 relative overflow-hidden -z-10">
        <TrailingCursor />

        {/* TRAILLING */}
        <div className="relative bottom-10">
          <svg
            width="900"
            height="130"
            viewBox="0 0 1417 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="path-1-outside-1_153_9"
              maskUnits="userSpaceOnUse"
              x="-2"
              y="-2"
              width="1421"
              height="134"
              fill="black"
            >
              <rect fill="white" x="-2" y="-2" width="1421" height="134" />
              <path d="M0.32492 55.4511V5.75187H198.944V55.4511L152.618 49.0612V30.9565H122.798V130H76.4713V30.9565H46.6517V49.0612L0.32492 55.4511ZM193.471 102.31V74.7983L219.918 70.3609V5.75187H404.338V66.811L350.734 75.8633L411.615 130H347.539L296.952 84.9157L266.245 90.0631V130H219.918V97.873L193.471 102.31ZM266.245 62.196L358.011 46.7538V30.9565H266.245V62.196ZM420.411 130L463.72 30.9565H441.711V5.75187H565.071L619.031 130H571.106L557.617 98.938H482.003L468.513 130H420.411ZM493.008 73.7334H546.612L527.797 30.9565H511.822L493.008 73.7334ZM604.454 30.9565V5.75187H677.228V130H630.901V30.9565H604.454ZM694.936 30.9565V5.75187H767.71V104.795H841.904V89.7081L888.23 83.3182V130H721.383V30.9565H694.936ZM895.314 30.9565V5.75187H968.087V130H921.761V30.9565H895.314ZM1003.55 130V0.781947L1141.64 77.9933V30.9565H1126.55V5.75187H1187.96V130H1148.74L1049.87 73.2009V104.795H1064.96V130H1003.55ZM1205.76 30.9565V5.75187H1416.63V49.7712L1370.3 43.3813V30.9565H1278.53V104.795H1370.3V87.9331H1332.85V62.7285H1416.63V130H1232.21V30.9565H1205.76Z" />
            </mask>
            <path
              d="M0.32492 55.4511H-1.06178V57.0422L0.514394 56.8248L0.32492 55.4511ZM0.32492 5.75187V4.36517H-1.06178V5.75187H0.32492ZM198.944 5.75187H200.331V4.36517H198.944V5.75187ZM198.944 55.4511L198.755 56.8248L200.331 57.0422V55.4511H198.944ZM152.618 49.0612H151.231V50.2698L152.428 50.4349L152.618 49.0612ZM152.618 30.9565H154.004V29.5698H152.618V30.9565ZM122.798 30.9565V29.5698H121.411V30.9565H122.798ZM122.798 130V131.387H124.185V130H122.798ZM76.4713 130H75.0846V131.387H76.4713V130ZM76.4713 30.9565H77.858V29.5698H76.4713V30.9565ZM46.6517 30.9565V29.5698H45.265V30.9565H46.6517ZM46.6517 49.0612L46.8412 50.4349L48.0384 50.2698V49.0612H46.6517ZM1.71162 55.4511V5.75187H-1.06178V55.4511H1.71162ZM0.32492 7.13857H198.944V4.36517H0.32492V7.13857ZM197.558 5.75187V55.4511H200.331V5.75187H197.558ZM199.134 54.0774L152.807 47.6875L152.428 50.4349L198.755 56.8248L199.134 54.0774ZM154.004 49.0612V30.9565H151.231V49.0612H154.004ZM152.618 29.5698H122.798V32.3432H152.618V29.5698ZM121.411 30.9565V130H124.185V30.9565H121.411ZM122.798 128.613H76.4713V131.387H122.798V128.613ZM77.858 130V30.9565H75.0846V130H77.858ZM76.4713 29.5698H46.6517V32.3432H76.4713V29.5698ZM45.265 30.9565V49.0612H48.0384V30.9565H45.265ZM46.4622 47.6875L0.135445 54.0774L0.514394 56.8248L46.8412 50.4349L46.4622 47.6875ZM193.471 102.31H192.084V103.949L193.701 103.678L193.471 102.31ZM193.471 74.7983L193.242 73.4307L192.084 73.6249V74.7983H193.471ZM219.918 70.3609L220.148 71.7285L221.305 71.5343V70.3609H219.918ZM219.918 5.75187V4.36517H218.532V5.75187H219.918ZM404.338 5.75187H405.725V4.36517H404.338V5.75187ZM404.338 66.811L404.569 68.1783L405.725 67.9831V66.811H404.338ZM350.734 75.8633L350.503 74.496L347.651 74.9776L349.812 76.8996L350.734 75.8633ZM411.615 130V131.387H415.262L412.537 128.964L411.615 130ZM347.539 130L346.616 131.035L347.011 131.387H347.539V130ZM296.952 84.9157L297.875 83.8804L297.378 83.4382L296.723 83.5481L296.952 84.9157ZM266.245 90.0631L266.016 88.6955L264.858 88.8895V90.0631H266.245ZM266.245 130V131.387H267.632V130H266.245ZM219.918 130H218.532V131.387H219.918V130ZM219.918 97.873H221.305V96.2342L219.689 96.5054L219.918 97.873ZM266.245 62.196H264.858V63.8356L266.475 63.5635L266.245 62.196ZM358.011 46.7538L358.241 48.1212L359.398 47.9266V46.7538H358.011ZM358.011 30.9565H359.398V29.5698H358.011V30.9565ZM266.245 30.9565V29.5698H264.858V30.9565H266.245ZM194.858 102.31V74.7983H192.084V102.31H194.858ZM193.701 76.1659L220.148 71.7285L219.689 68.9933L193.242 73.4307L193.701 76.1659ZM221.305 70.3609V5.75187H218.532V70.3609H221.305ZM219.918 7.13857H404.338V4.36517H219.918V7.13857ZM402.951 5.75187V66.811H405.725V5.75187H402.951ZM404.107 65.4436L350.503 74.496L350.965 77.2307L404.569 68.1783L404.107 65.4436ZM349.812 76.8996L410.694 131.036L412.537 128.964L351.655 74.8271L349.812 76.8996ZM411.615 128.613H347.539V131.387H411.615V128.613ZM348.461 128.965L297.875 83.8804L296.029 85.9509L346.616 131.035L348.461 128.965ZM296.723 83.5481L266.016 88.6955L266.474 91.4307L297.181 86.2833L296.723 83.5481ZM264.858 90.0631V130H267.632V90.0631H264.858ZM266.245 128.613H219.918V131.387H266.245V128.613ZM221.305 130V97.873H218.532V130H221.305ZM219.689 96.5054L193.242 100.943L193.701 103.678L220.148 99.2406L219.689 96.5054ZM266.475 63.5635L358.241 48.1212L357.781 45.3863L266.015 60.8286L266.475 63.5635ZM359.398 46.7538V30.9565H356.624V46.7538H359.398ZM358.011 29.5698H266.245V32.3432H358.011V29.5698ZM264.858 30.9565V62.196H267.632V30.9565H264.858ZM420.411 130L419.141 129.444L418.291 131.387H420.411V130ZM463.72 30.9565L464.991 31.5121L465.84 29.5698H463.72V30.9565ZM441.711 30.9565H440.324V32.3432H441.711V30.9565ZM441.711 5.75187V4.36517H440.324V5.75187H441.711ZM565.071 5.75187L566.343 5.19949L565.981 4.36517H565.071V5.75187ZM619.031 130V131.387H621.145L620.303 129.448L619.031 130ZM571.106 130L569.834 130.552L570.197 131.387H571.106V130ZM557.617 98.938L558.888 98.3856L558.526 97.5513H557.617V98.938ZM482.003 98.938V97.5513H481.093L480.731 98.3856L482.003 98.938ZM468.513 130V131.387H469.423L469.785 130.552L468.513 130ZM493.008 73.7334L491.738 73.175L490.883 75.1201H493.008V73.7334ZM546.612 73.7334V75.1201H548.737L547.881 73.175L546.612 73.7334ZM527.797 30.9565L529.066 30.3982L528.702 29.5698H527.797V30.9565ZM511.822 30.9565V29.5698H510.917L510.553 30.3982L511.822 30.9565ZM421.682 130.556L464.991 31.5121L462.45 30.4009L419.141 129.444L421.682 130.556ZM463.72 29.5698H441.711V32.3432H463.72V29.5698ZM443.098 30.9565V5.75187H440.324V30.9565H443.098ZM441.711 7.13857H565.071V4.36517H441.711V7.13857ZM563.8 6.30425L617.759 130.552L620.303 129.448L566.343 5.19949L563.8 6.30425ZM619.031 128.613H571.106V131.387H619.031V128.613ZM572.378 129.448L558.888 98.3856L556.345 99.4903L569.834 130.552L572.378 129.448ZM557.617 97.5513H482.003V100.325H557.617V97.5513ZM480.731 98.3856L467.241 129.448L469.785 130.552L483.275 99.4904L480.731 98.3856ZM468.513 128.613H420.411V131.387H468.513V128.613ZM493.008 75.1201H546.612V72.3467H493.008V75.1201ZM547.881 73.175L529.066 30.3982L526.528 31.5148L545.342 74.2917L547.881 73.175ZM527.797 29.5698H511.822V32.3432H527.797V29.5698ZM510.553 30.3982L491.738 73.175L494.277 74.2917L513.092 31.5148L510.553 30.3982ZM604.454 30.9565H603.067V32.3432H604.454V30.9565ZM604.454 5.75187V4.36517H603.067V5.75187H604.454ZM677.228 5.75187H678.614V4.36517H677.228V5.75187ZM677.228 130V131.387H678.614V130H677.228ZM630.901 130H629.514V131.387H630.901V130ZM630.901 30.9565H632.287V29.5698H630.901V30.9565ZM605.84 30.9565V5.75187H603.067V30.9565H605.84ZM604.454 7.13857H677.228V4.36517H604.454V7.13857ZM675.841 5.75187V130H678.614V5.75187H675.841ZM677.228 128.613H630.901V131.387H677.228V128.613ZM632.287 130V30.9565H629.514V130H632.287ZM630.901 29.5698H604.454V32.3432H630.901V29.5698ZM694.936 30.9565H693.549V32.3432H694.936V30.9565ZM694.936 5.75187V4.36517H693.549V5.75187H694.936ZM767.71 5.75187H769.096V4.36517H767.71V5.75187ZM767.71 104.795H766.323V106.182H767.71V104.795ZM841.904 104.795V106.182H843.29V104.795H841.904ZM841.904 89.7081L841.714 88.3344L840.517 88.4995V89.7081H841.904ZM888.23 83.3182H889.617V81.7271L888.041 81.9445L888.23 83.3182ZM888.23 130V131.387H889.617V130H888.23ZM721.383 130H719.996V131.387H721.383V130ZM721.383 30.9565H722.77V29.5698H721.383V30.9565ZM696.322 30.9565V5.75187H693.549V30.9565H696.322ZM694.936 7.13857H767.71V4.36517H694.936V7.13857ZM766.323 5.75187V104.795H769.096V5.75187H766.323ZM767.71 106.182H841.904V103.409H767.71V106.182ZM843.29 104.795V89.7081H840.517V104.795H843.29ZM842.093 91.0818L888.42 84.6919L888.041 81.9445L841.714 88.3344L842.093 91.0818ZM886.844 83.3182V130H889.617V83.3182H886.844ZM888.23 128.613H721.383V131.387H888.23V128.613ZM722.77 130V30.9565H719.996V130H722.77ZM721.383 29.5698H694.936V32.3432H721.383V29.5698ZM895.314 30.9565H893.927V32.3432H895.314V30.9565ZM895.314 5.75187V4.36517H893.927V5.75187H895.314ZM968.087 5.75187H969.474V4.36517H968.087V5.75187ZM968.087 130V131.387H969.474V130H968.087ZM921.761 130H920.374V131.387H921.761V130ZM921.761 30.9565H923.147V29.5698H921.761V30.9565ZM896.7 30.9565V5.75187H893.927V30.9565H896.7ZM895.314 7.13857H968.087V4.36517H895.314V7.13857ZM966.701 5.75187V130H969.474V5.75187H966.701ZM968.087 128.613H921.761V131.387H968.087V128.613ZM923.147 130V30.9565H920.374V130H923.147ZM921.761 29.5698H895.314V32.3432H921.761V29.5698ZM1003.55 130H1002.16V131.387H1003.55V130ZM1003.55 0.781948L1004.22 -0.428406L1002.16 -1.58213V0.781948H1003.55ZM1141.64 77.9933L1140.96 79.2036L1143.02 80.3574V77.9933H1141.64ZM1141.64 30.9565H1143.02V29.5698H1141.64V30.9565ZM1126.55 30.9565H1125.16V32.3432H1126.55V30.9565ZM1126.55 5.75187V4.36517H1125.16V5.75187H1126.55ZM1187.96 5.75187H1189.35V4.36517H1187.96V5.75187ZM1187.96 130V131.387H1189.35V130H1187.96ZM1148.74 130L1148.05 131.202L1148.37 131.387H1148.74V130ZM1049.87 73.2009L1050.56 71.9985L1048.49 70.8049V73.2009H1049.87ZM1049.87 104.795H1048.49V106.182H1049.87V104.795ZM1064.96 104.795H1066.35V103.409H1064.96V104.795ZM1064.96 130V131.387H1066.35V130H1064.96ZM1004.93 130V0.781948H1002.16V130H1004.93ZM1002.87 1.9923L1140.96 79.2036L1142.31 76.7829L1004.22 -0.428406L1002.87 1.9923ZM1143.02 77.9933V30.9565H1140.25V77.9933H1143.02ZM1141.64 29.5698H1126.55V32.3432H1141.64V29.5698ZM1127.94 30.9565V5.75187H1125.16V30.9565H1127.94ZM1126.55 7.13857H1187.96V4.36517H1126.55V7.13857ZM1186.58 5.75187V130H1189.35V5.75187H1186.58ZM1187.96 128.613H1148.74V131.387H1187.96V128.613ZM1149.43 128.798L1050.56 71.9985L1049.18 74.4032L1148.05 131.202L1149.43 128.798ZM1048.49 73.2009V104.795H1051.26V73.2009H1048.49ZM1049.87 106.182H1064.96V103.409H1049.87V106.182ZM1063.57 104.795V130H1066.35V104.795H1063.57ZM1064.96 128.613H1003.55V131.387H1064.96V128.613ZM1205.76 30.9565H1204.37V32.3432H1205.76V30.9565ZM1205.76 5.75187V4.36517H1204.37V5.75187H1205.76ZM1416.63 5.75187H1418.01V4.36517H1416.63V5.75187ZM1416.63 49.7712L1416.44 51.1449L1418.01 51.3623V49.7712H1416.63ZM1370.3 43.3813H1368.91V44.5899L1370.11 44.755L1370.3 43.3813ZM1370.3 30.9565H1371.69V29.5698H1370.3V30.9565ZM1278.53 30.9565V29.5698H1277.15V30.9565H1278.53ZM1278.53 104.795H1277.15V106.182H1278.53V104.795ZM1370.3 104.795V106.182H1371.69V104.795H1370.3ZM1370.3 87.9331H1371.69V86.5464H1370.3V87.9331ZM1332.85 87.9331H1331.46V89.3198H1332.85V87.9331ZM1332.85 62.7285V61.3418H1331.46V62.7285H1332.85ZM1416.63 62.7285H1418.01V61.3418H1416.63V62.7285ZM1416.63 130V131.387H1418.01V130H1416.63ZM1232.21 130H1230.82V131.387H1232.21V130ZM1232.21 30.9565H1233.59V29.5698H1232.21V30.9565ZM1207.15 30.9565V5.75187H1204.37V30.9565H1207.15ZM1205.76 7.13857H1416.63V4.36517H1205.76V7.13857ZM1415.24 5.75187V49.7712H1418.01V5.75187H1415.24ZM1416.82 48.3975L1370.49 42.0076L1370.11 44.755L1416.44 51.1449L1416.82 48.3975ZM1371.69 43.3813V30.9565H1368.91V43.3813H1371.69ZM1370.3 29.5698H1278.53V32.3432H1370.3V29.5698ZM1277.15 30.9565V104.795H1279.92V30.9565H1277.15ZM1278.53 106.182H1370.3V103.409H1278.53V106.182ZM1371.69 104.795V87.9331H1368.91V104.795H1371.69ZM1370.3 86.5464H1332.85V89.3198H1370.3V86.5464ZM1334.24 87.9331V62.7285H1331.46V87.9331H1334.24ZM1332.85 64.1152H1416.63V61.3418H1332.85V64.1152ZM1415.24 62.7285V130H1418.01V62.7285H1415.24ZM1416.63 128.613H1232.21V131.387H1416.63V128.613ZM1233.59 130V30.9565H1230.82V130H1233.59ZM1232.21 29.5698H1205.76V32.3432H1232.21V29.5698Z"
              fill="white"
              fillOpacity="0.16"
              mask="url(#path-1-outside-1_153_9)"
            />
          </svg>
        </div>

        {/* CURSOR */}
        <div className="relative bottom-10 left-40">
          <svg
            width="720"
            height="68"
            viewBox="0 0 720 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 14.432V0.799995H114.048V25.568L88.992 22.112V14.432H39.36V54.368H88.992V46.688L114.048 43.232V68H14.304V14.432H0ZM121.688 14.432V0.799995H161.048V47.84L173.336 54.368H210.584V0.799995H235.64V68H166.616L135.992 51.68V14.432H121.688ZM245.25 53.024V38.144L259.554 35.744V0.799995H359.298V33.824L330.306 38.72L363.234 68H328.578L301.218 43.616L284.61 46.4V68H259.554V50.624L245.25 53.024ZM284.61 31.328L334.242 22.976V14.432H284.61V31.328ZM375.671 68V45.92L400.727 49.568V54.368H449.303V45.92L375.671 34.304V0.799995H474.359V24.128L449.303 20.288V14.432H400.727V23.552L474.359 35.168V68H375.671ZM492.6 68V0.799995H592.344V68H492.6ZM517.656 54.368H567.288V14.432H517.656V54.368ZM601.969 53.024V38.144L616.273 35.744V0.799995H716.017V33.824L687.025 38.72L719.953 68H685.297L657.937 43.616L641.329 46.4V68H616.273V50.624L601.969 53.024ZM641.329 31.328L690.961 22.976V14.432H641.329V31.328Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="w-1/2">
          <p className=" font-thin tracking-[10px] text-[#6D6D6D] text-lg relative left-[100px] top-12">
            KAIALAN RAZZ
          </p>
          <p className=" font-thin tracking-[10px] text-[#6D6D6D] text-base relative left-[100px] top-14">
            APR 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrailingCursorDemo;
