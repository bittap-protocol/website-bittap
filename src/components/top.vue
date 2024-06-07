<template>
  <div class="top" id="top">
    <div class="wrapper">
      <nav class="l">
        <img alt="BitTap logo" class="link logo" src="@/assets/logo.png" width="90" height="25" />
        <a class="link home" href="#top">Home</a>
        <a class="link wallet" href="#wallet">Wallet</a>
        <a class="link marketplace" href="#market">Marketplace</a>
      </nav>
      <nav class="r">
        <a class="link" to="/">
          <img src="/img/icon_book.png" />
        </a>
        <a class="link" to="/">
          <img src="/img/icon_x.png" />
        </a>
        <a class="link" to="/">
          <img src="/img/icon_github.png" />
        </a>
        <button class="link connect" @click="$root._tips('Coming soon', 'success')">
          <img src="/img/icon_walet_connect.png" />
        </button>
      </nav>
    </div>
    <div class="home-top" v-if="home">
      <div class="hero">The First Non-Custodial Wallet and Decentralized Marketplace for</div>
      <div class="protocol">
        <img src="/img/taproot_assets.png" />
      </div>
      <div class="des">
        “Empowering users to seamlessly issue, manage, and trade any assets on the bitcoin
        blockchain.”
      </div>
      <div class="actions">
        <button class="btn wallet" @click="$root._tips('Coming soon', 'info')">
          Open BitTap Wallet
          <span class="beta">Beta</span>
        </button>
        <button @click="$root._tips('Coming soon', 'info')" class="btn form">Points Form</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    home: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>
.top {
  @apply w-full flex flex-col justify-between items-center;
  background: url('/img/bg_1.png') no-repeat center top;
  background-size: 100% 100%;

  a.link {
    @apply text-white;
    &:hover,
    &:focus,
    &:active {
      @apply text-pink-400;
    }
  }
  .wrapper {
    @apply flex flex-row justify-between items-center gap-0;
    height: 52px;
    background: rgba(255, 255, 255, 0.03);
    width: 90vw;
    .l {
      @apply flex flex-row justify-start items-center pl-5;
      .link {
        @apply mr-2 no-underline;
      }
    }
    .r {
      @apply flex flex-row justify-between items-center;
      .link {
        @apply mr-2 no-underline;
      }
    }
  }
  .home-top {
    @apply flex flex-col justify-center items-center;
    font-family:
      PingFangSC,
      PingFang SC;
    .hero {
      margin-top: 150px;
      width: 55vw;
      min-width: 880px;
      max-width: 90vw;
      font-weight: 600;
      font-size: 50px;
      color: #ffffff;
      display: block;
      text-align: center;
    }
    .protocol {
      @apply text-white text-5xl my-4;
      img {
        height: 46px;
      }
    }
    .des {
      font-family:
        PingFangSC,
        PingFang SC;
      font-weight: 400;
      font-size: 16px;
      color: #d9d9ff;
      line-height: 28px;
      @apply w-[80%] text-center;
    }
    .actions {
      @apply my-4 flex flex-row items-center justify-center gap-4;
      margin-bottom: 330px;
      .wallet {
        width: 177px;
        height: 44px;
        background: linear-gradient(135deg, #0579ff 0%, #7f02ff 100%);
        border-radius: 6px;
        font-family:
          PingFangSC,
          PingFang SC;
        font-weight: 400;
        font-size: 16px;
        @apply border-0 text-white;
        .beta {
          position: absolute;
          margin-top: -27px;
          margin-left: 120px;
          font-size: 10px;
          font-weight: 400;
          color: #ffe221;
        }
      }
      .form {
        width: 177px;
        height: 44px;
        font-family:
          PingFangSC,
          PingFang SC;
        font-weight: 400;
        font-size: 16px;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 6px;
        border: 1px solid;
        border-image: linear-gradient(135deg, rgba(5, 121, 255, 1), rgba(127, 2, 255, 1)) 1 1;
        @apply text-white;
      }
    }
  }
}

@media (max-width: 1024px) {
  .top {
    // background-size: 100% 100%;
    background-size: contain;
    .wrapper {
      @apply w-full flex flex-col justify-center items-center gap-2;
      height: 104px;
      .l {
        @apply justify-start w-full;
      }
      .r {
        @apply justify-end w-full;
      }
    }
    .home-top {
      .hero {
        width: 80vw;
        max-width: 80vw;
        min-width: 80vw;
        margin-top: 20px;
        @apply text-3xl mb-5;
      }
      .protocol img {
        height: 24px;
      }
      .actions {
        margin-bottom: 20px;
        @apply flex flex-col;
      }
    }
  }
}
</style>
