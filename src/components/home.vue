<template>
  <div class="home">
    <div class="home-one">
      <div class="faq">
        <div class="title">What is the Taproot Assets ?<span class="arrow"></span></div>
        <div class="tips">
          A new asset issuance protocol on the BTC network, developed by Lightning Labs
        </div>
        <div class="feature">
          <div class="title">Feature</div>
          <div class="line">1. No Congestion on BTC Mainnet</div>
          <div class="line">2. The same level of security as BTC</div>
          <div class="line">
            3. Assets can circulate on the Lightning Network, both fast and cost-effective.
          </div>
          <a
            class="btn btn-link"
            href="https://docs.lightning.engineering/the-lightning-network/taproot-assets"
            target="_blank"
            >More Info</a
          >
        </div>
      </div>

      <div class="wallet" id="wallet">
        <div class="f">
          <div class="title">BitTap Wallet</div>
          <div class="item">
            <img class="icon" src="/img/icon_assets.png" />
            <div class="msg">Asset Creation and Issuance</div>
          </div>
          <div class="item">
            <img class="icon" src="/img/icon_key.png" />
            <div class="msg">Private Key Security</div>
          </div>
          <div class="item">
            <img class="icon" src="/img/icon_multi.png" />
            <div class="msg">Multi-device Access</div>
          </div>
          <div class="item">
            <img class="icon" src="/img/icon_plugin.png" />
            <div class="msg">Browser Plugin just like MetaMask</div>
          </div>
          <a href="###" @click="$root._tips('Coming soon', 'info')" class="btn btn-primary btn-bg"
            >Install the BitTap Wallet</a
          >
        </div>
        <div class="img">
          <img src="/img/home_wallet.png" />
        </div>
      </div>
    </div>
    <div class="home-two" id="market">
      <div class="market">
        <div class="img">
          <img src="/img/home_market.png" />
        </div>
        <div class="f">
          <div class="title">BitTap Marketplace</div>
          <div class="item">
            <img class="icon" src="/img/icon_peer.png" />
            <div class="msg">Peer-to-peer Transactions</div>
          </div>
          <div class="item">
            <img class="icon" src="/img/icon_gas.png" />
            <div class="msg">Rapid Trading with Minimal Gas-fee</div>
          </div>
          <div class="item">
            <img class="icon" src="/img/icon_network.png" />
            <div class="msg">Facilitated by the Lightning Network</div>
          </div>
          <div class="item">
            <img class="icon" src="/img/icon_protocol.png" />
            <div class="msg">Full-protocol Circulation</div>
          </div>
          <div class="comingsoon">
            <img src="/img/icon_comingsoom.png" />
          </div>
        </div>
      </div>

      <div class="asset">
        <div class="f">
          <div class="title">One-Click Asset Issuance for Everyone</div>
          <div class="tips">
            No nodes or server setup required, you can use the BitTap wallet to easily create,
            issue, send, and receive Taproot Assets with just one click.
          </div>
        </div>
        <div class="img"></div>
      </div>

      <div class="security">
        <div class="con">
          <div class="img">
            <img src="/img/home_sec.png" />
          </div>
          <div class="f">
            <div class="title">
              Security, Transparency,<br />
              and Privacy
            </div>
            <div class="tips">
              BitTap's non-custodial wallet and decentralized exchange put you in full control of
              your assets.
            </div>
          </div>
        </div>
      </div>

      <div class="tech">
        <div class="f">
          <div class="title">Technical Solutions</div>
        </div>
        <div class="img">
          <img src="/img/home_tech.png" />
        </div>
        <button class="full" @click="fullscreen = true">Full Screen</button>
      </div>

      <div class="bg hidden">
        <div class="rd">
          <div class="f">
            <div class="title">R&D Partner</div>
          </div>
          <div class="img">
            <img src="/img/home_light.png" />
          </div>
        </div>

        <div class="partners">
          <div class="f">
            <div class="title">Strategic Partners</div>
          </div>
          <div class="imgs">
            <img src="/img/partners/lnfi.png" />
            <img src="/img/partners/gate.png" />
            <img src="/img/partners/discoco.png" />
            <img src="/img/partners/bihelix.png" />
            <img src="/img/partners/runes.png" />
            <img src="/img/partners/trust.png" />
            <img src="/img/partners/flash.png" />
            <img src="/img/partners/tra.png" />
          </div>
        </div>
      </div>

      <div class="roadmap">
        <div class="f">
          <div class="title">Roadmap</div>
        </div>
        <div class="con">
          <div class="procedure">
            <div class="pro">
              <div class="dot"><div class="d"></div></div>
            </div>
          </div>
          <div class="steps-box">
            <div class="item active">
              <div class="top">
                <img src="/img/icon_1.png" />
              </div>
              <div class="des">
                <div class="title">Q3 2024</div>
                <div class="line"><i class="d"></i>BitTap Wallet Launch</div>
              </div>
            </div>
            <div class="item">
              <div class="top">
                <img src="/img/icon_2.png" />
              </div>
              <div class="des">
                <div class="title">Q4 2024</div>
                <div class="line"><i class="d"></i>BitTap Marketplace Launch</div>
              </div>
            </div>
            <div class="item">
              <div class="top">
                <img src="/img/icon_3.png" />
              </div>
              <div class="des">
                <div class="title">2025...</div>
                <div class="line"><i class="d"></i>Building on LightningNetwork</div>
              </div>
            </div>
            <div class="item">
              <div class="top">
                <img src="/img/icon_4.png" />
              </div>
              <div class="des">
                <div class="title">More</div>
                <div class="line">Look forward to 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="['dialog', fullscreen ? 'dialog-show' : 'dialog-hide']"
      @click="fullscreen = false"
    >
      <div class="controls"><img src="/img/home_tech_big.png" /></div>
    </div>
    <div v-if="fullscreen" class="dialog-mask"></div>
  </div>
</template>

<script>
// import DocumentationIcon from './icons/IconDocumentation.vue'
// import ToolingIcon from './icons/IconTooling.vue'
// import EcosystemIcon from './icons/IconEcosystem.vue'
// import CommunityIcon from './icons/IconCommunity.vue'
// import SupportIcon from './icons/IconSupport.vue'

export default {
  // components: {
  //   DocumentationIcon,
  //   ToolingIcon,
  //   CommunityIcon,
  //   SupportIcon,
  //   EcosystemIcon
  // },
  data() {
    return {
      fullscreen: false
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.home {
  @apply text-white;
  .dialog {
    margin: 0px auto;
    position: fixed;
    z-index: 999;
    display: block;

    &-mask {
      position: fixed;
      z-index: 998;
      top: 0px;
      left: 0px;
      width: 100vw;
      height: 100vh;
      background: #0a0a17ad;
    }
    &-show {
      top: 1vh;
      width: 100vw;
      height: 100vh;
      left: 0px;
      transition: all 0.4s ease-in;
      @apply flex flex-col justify-center items-center;
      .controls {
        margin: 0px auto;
        max-width: 100vw;
        max-height: 90vh;

        background: #000000;
        // border: 1px solid #3a6fe1;
        border-radius: 40px;
        padding: 10px;
        transition: all 0.3s ease-in;
      }
      img {
        max-height: 88vh;
      }
    }
    &-hide {
      width: 0vw;
      height: 0vh;
      top: -110vh;
      left: 50vw;
      // display: none;
      transition: all 0.5s ease-out;
      .controls {
        margin-top: -110vh;
        max-width: 0vw;
        max-height: 0vh;
        transition: all 0.5s ease-out;
      }
    }
  }
  .home-one {
    background: url('/img/bg_home_one.png') no-repeat center right;
    background-size: auto 100%;
    .faq {
      background: url('/img/bg_home_faq.png') no-repeat center center;
      background-size: 100% 100%;
      max-width: 80vw;
      margin: 20px auto;
      padding: 40px;
      .title {
        @apply text-4xl;
      }
      .tips {
        @apply my-4 text-lg;
        color: #d9d9ff;
      }
      .feature {
        @apply mt-8;
        .title {
          @apply mb-4;
        }
        .line {
          @apply mt-2 text-xl;
          color: #d9d9ff;
        }
        .btn-link {
          @apply my-4 text-white no-underline text-lg mb-16;
          border: 1px solid white;
        }
      }
    }

    .wallet {
      @apply flex flex-row justify-between items-center mx-auto mt-10 pl-10 gap-20;
      // width: 80vw;
      background: url('/img/home_one_ ellipse.png') no-repeat left top;
      background-size: 12% auto;
      max-width: 80vw;
      margin: 20px auto;
      .f {
        @apply pl-10;
        flex: 1;
        .title {
          @apply text-5xl pb-5 pt-10;
        }
        .item {
          @apply flex flex-row justify-start items-center mt-2 text-lg font-normal;
          > *:first-child {
            @apply mr-2;
          }
          .icon {
            width: 2.5rem;
            height: 2.5rem;
          }
        }
        .btn {
          @apply my-10;
        }
      }
      .img {
        width: 65%;
        flex: 1;
      }
    }
  }
  .home-two {
    @apply my-20;
    .market {
      @apply flex flex-row justify-between items-start mx-auto my-20 pl-10 gap-20;
      width: 98vw;
      .f {
        @apply pl-1;
        flex: 1;
        width: 40%;

        .title {
          @apply text-5xl pb-5 pt-10 pr-8;
          background: url('/img/home_one_ ellipse.png') no-repeat right 20px;
          background-size: 10% auto;
          display: inline-block;
          // width: 30vw;
        }
        .item {
          @apply flex flex-row justify-start items-center mt-2 text-lg font-normal;
          > *:first-child {
            @apply mr-2;
          }
          .icon {
            width: 2.5rem;
            height: 2.5rem;
          }
        }
        .comingsoon {
          @apply mt-5;
        }
      }
      .img {
        width: 50%;
        flex: 1;
      }
    }
    .asset {
      @apply flex flex-row justify-between items-start mx-auto mt-40 pl-10 gap-20;
      width: 100vw;
      height: 400px;
      background: url('/img/home_asset.png') no-repeat right center;
      // background-size: 50% auto;
      background-size: auto 400px;
      .f {
        @apply pt-7 pl-40;

        flex: 1;
        .title {
          @apply text-4xl pb-5 pt-16 pl-16;
          background: url('/img/icon_on_click.png') no-repeat left top;
          background-size: 140px auto;
          min-height: 140px;
        }
        .tips {
          @apply my-4  pt-2 pl-16;
        }
      }
      .img {
        flex: 1;
      }
    }
    .security {
      @apply mx-auto my-20;
      background: url('/img/bg_home_one.png') no-repeat center right;
      transform: scaleX(-1);
      transform-origin: center center;
      background-size: auto 100%;
      .con {
        @apply flex flex-row justify-between items-start mx-auto my-20 py-10 gap-20;
        transform: scaleX(-1);
        transform-origin: center center;
        .f {
          flex: 1;
          .title {
            @apply pt-20 text-5xl;
          }
          .tips {
            @apply text-lg mt-10;
          }
        }
        .img {
          flex: 1;
        }
      }
    }

    .tech {
      @apply flex flex-col justify-center items-center px-20 mx-auto;
      .f {
        .title {
          @apply pt-20 text-5xl;
        }
      }
      .img {
        @apply pt-20;
        img {
          max-height: 50vh;
          width: auto;
        }
      }
      .full {
        @apply my-6 border border-solid border-primary px-4 py-2 rounded-sm;
        &:hover,
        &:active,
        &:focus {
          @apply bg-primary opacity-75;
        }
      }
    }
    .bg {
      background: url('/img/bg_rd.png') no-repeat center center;
      background-size: auto 100%;
      // background: linear-gradient(
      //   180deg,
      //   rgba(143, 117, 255, 0) 0%,
      //   #8f75ff 9%,
      //   #8f75ff 54%,
      //   #8f75ff 91%,
      //   rgba(71, 49, 177, 0) 100%
      // );
      // backdrop-filter: blur(2px);
      // background: rgba(10, 10, 23, 0.07);
      // backdrop-filter: blur(50px);
    }
    .rd {
      @apply flex flex-col justify-center items-center px-20 mt-20 mx-auto;
      .f {
        .title {
          @apply pt-20 text-5xl mb-10;
        }
      }
    }
    .partners {
      @apply flex flex-col justify-center items-center px-20 mt-20 mx-auto;
      .f {
        .title {
          @apply pt-20 text-5xl mb-10;
        }
      }
      .imgs {
        @apply grid gap-10 grid-cols-4 grid-rows-4;
      }
    }
    .roadmap {
      @apply flex flex-col justify-center items-center px-20 mt-20 mx-auto;
      .f {
        .title {
          @apply pt-20 text-5xl mb-10;
        }
      }
      .con {
        @apply flex flex-col justify-center items-center px-0 mt-0 mx-auto gap-20;
        width: 1200px;
        .procedure {
          position: absolute;
          margin-bottom: 70px;
          background: rgba(255, 255, 255, 0.15);
          width: 1200px;
          height: 1px;
          transition: all 0.2s;
          .pro {
            width: 14%;
            height: 1px;
            background-image: linear-gradient(135deg, rgba(5, 121, 255, 1), rgba(127, 2, 255, 1));
            @apply flex flex-row justify-end items-center;
            .dot {
              width: 20px;
              height: 20px;
              position: absolute;
              background: #0a0a17;
              border-radius: 10px;
              padding: 0px;
              border: 1px solid rgba(5, 121, 255, 1);
              // border-image: linear-gradient(135deg, rgba(5, 121, 255, 1), rgba(127, 2, 255, 1)) 1 1;
              @apply flex flex-row justify-center items-center;

              .d {
                width: 6px;
                height: 6px;
                border-radius: 5px;
                background-image: linear-gradient(
                  135deg,
                  rgba(5, 121, 255, 1),
                  rgba(127, 2, 255, 1)
                );
              }
            }
          }
        }
        .steps-box {
          @apply flex flex-row justify-center items-center px-0 mt-0 mx-auto gap-20;

          .item {
            .top {
              @apply flex flex-col justify-center items-center mb-16;
              .arrow {
                @apply p-4 w-full mb-10;
                border-bottom: 1px solid #eeccff;
              }
            }
            .des {
              background: linear-gradient(
                180deg,
                rgba(143, 117, 255, 0.29) 0%,
                rgba(71, 49, 177, 0) 100%
              );
              border-radius: 24px;
              border-width: 1px;
              border-style: none;
              border-image: linear-gradient(
                  135deg,
                  rgba(5, 121, 255, 0.1),
                  rgba(174, 108, 255, 0.2)
                )
                1 1;
              backdrop-filter: blur(2px);
              @apply p-6;
              min-height: 130px;
              .title {
                @apply text-2xl;
              }
              .line {
                @apply text-sm flex flex-row flex-wrap justify-start items-center;
                .d {
                  background: #f3753a;
                  width: 5px;
                  height: 5px;
                  @apply mr-2 inline-block;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .home {
    .home-one {
      .faq {
        width: 100vw;
        @apply m-0;
        .title {
          @apply text-2xl;
        }
      }
      .wallet {
        width: 100vw;
        @apply flex-col pl-0 m-0;
        .f {
          width: 100%;
          @apply pl-10;
          .item {
            @apply text-xl;
            .icon {
              width: 2.2rem;
              height: 2.2rem;
            }
          }
        }
        .img {
          width: 100%;
        }
      }
    }
    .home-two {
      .market,
      .asset,
      .tech,
      .rd,
      .partners,
      .roadmap {
        @apply flex-col mt-5 px-5;
        .f {
          width: 90%;
          .title {
            @apply text-2xl leading-loose py-0 mb-5;
          }
        }
        .img {
          width: 90%;
          @apply py-10 my-2;
        }
      }
      .asset {
        .f {
          @apply pl-0 pt-40 w-[90%];
          .title {
            margin-top: 100px;
            background-size: 80px auto;
            min-height: 80px;
            @apply pl-10 pt-10;
          }
        }
      }
      .security {
        .con {
          @apply flex-col w-[90%] my-0 gap-0;
          .f .title {
            @apply text-2xl;
          }
          .img {
            @apply mt-20;
          }
        }
      }
      .bg {
        background-size: 100% 100%;
      }
      .partners {
        @apply pb-10;
        .imgs {
          @apply grid gap-6 grid-cols-2 grid-rows-2;
        }
      }

      .roadmap {
        @apply flex flex-col justify-between items-center px-0 mt-10 mx-auto gap-0;
        width: 90%;
        .con {
          @apply flex-row;
          width: 90vw;
          .procedure {
            // width: 1px;
            width: 1000px;
            transform: rotate(90deg);
            margin-left: -75%;
            margin-top: 100px;
          }
          .steps-box {
            @apply flex-col gap-10 ml-12;
            width: 90%;
            .item {
              min-width: 75%;
              .top {
                @apply mb-1;
              }
            }
          }
        }
      }
    }
  }
}
</style>
