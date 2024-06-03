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
          <a class="btn btn-link">More Info</a>
        </div>
      </div>

      <div class="wallet">
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
          <a href="" class="btn btn-primary btn-bg">Install the BitTap Wallet</a>
        </div>
        <div class="img">
          <img src="/img/home_wallet.png" />
        </div>
      </div>
    </div>
    <div class="home-two"></div>
  </div>
</template>

<script>
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

export default {
  components: {
    DocumentationIcon,
    ToolingIcon,
    CommunityIcon,
    SupportIcon,
    EcosystemIcon
  }
}
</script>

<style lang="scss" scoped>
.home {
  @apply text-white;
  .home-one {
    background: url('/img/bg_home_one.png') no-repeat center right;

    .faq {
      background: url('/img/bg_home_faq.png') no-repeat center center;
      background-size: 100% 100%;
      width: 80vw;
      margin: 20px auto;
      padding: 40px;
      @apply mb-20;
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
      @apply flex flex-row justify-between items-start mx-auto mt-10 pl-10;
      width: 80vw;
      background: url('/img/home_one_ ellipse.png') no-repeat left top;
      background-size: 12% auto;
      .f {
        @apply pl-10;
        .title {
          @apply text-5xl pb-5 pt-10;
        }
        .item {
          @apply flex flex-row justify-start items-center mt-5 text-2xl font-normal;
          > *:first-child {
            @apply mr-2;
          }
          .icon {
            width: 3rem;
            height: 3rem;
          }
        }
        .btn {
          @apply my-10;
        }
      }
      .img {
        width: 65%;
      }
    }
  }
}
@media (max-width: 1024px) {
  .home {
    .home-one {
      .faq {
        width: 100vw;
        .title {
          @apply text-2xl;
        }
      }
      .wallet {
        width: 100vw;
        @apply flex-col pl-0;
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
  }
}
</style>
