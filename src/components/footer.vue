<template>
  <footer class="footer">
    <div v-if="home" class="install">
      <div class="slogan">Unlocking Your Assets on <br />Bitcoin Blockchain</div>
      <div class="tips">Install the BitTap and Join the Future!</div>
      <a href="#wallet" class="btn btn-primary btn-bg">Install the BitTap Wallet</a>
    </div>
    <div class="wrapper">
      <div class="copy">
        <img alt="BitTap logo" class="link logo" src="@/assets/logo.png" />
        <div class="cp">Tabi 2024 All Rights Reserved</div>
        <div class="icons">
          <a href="/">
            <img src="/img/icon_facebook.png" />
          </a>
          <a href="/">
            <img src="/img/icon_in.png" />
          </a>
          <a href="/">
            <img src="/img/icon_youtube.png" />
          </a>
          <a href="/">
            <img src="/img/icon_med.png" />
          </a>
        </div>
      </div>
      <div class="links">
        <div class="bittap">
          <div class="title">BitTap</div>
          <a href="#top" class="link">Home</a>
          <a href="#wallet" class="link">Wallet</a>
        </div>
        <div class="develop">
          <div class="title">Developers</div>
          <a href="/" class="link">Docs</a>
          <a href="/" class="link">Github</a>
        </div>
        <div class="community">
          <div class="title">Community</div>
          <a href="/" class="link">Twitter</a>
          <a href="/" class="link">Discord</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    home: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100vw;
  margin: 20px auto 0px auto;
  padding: 40px;
  background: url('/img/bg_bottom.png') no-repeat center center;
  background-size: 100% auto;
  @apply flex flex-col justify-center items-center text-center;
  .install {
    margin: 10px auto;
    @apply flex flex-col justify-center items-center text-center pb-20;
    .slogan {
      @apply text-6xl flex flex-row justify-center items-center text-center leading-[1.8];
    }
    .tips {
      @apply text-center  flex flex-row justify-center items-center my-5;
    }
    .btn-primary {
      @apply text-xl mb-40;
    }
  }
  .wrapper {
    width: 80vw;
    margin: 10px auto;
    border-top: 1px solid #28224c;
    padding: 120px 40px 40px 40px;
    @apply flex flex-row justify-between items-center;
    .copy {
      @apply flex flex-col justify-center items-start gap-4 text-lg;
      .logo {
        height: 90px;
        width: auto;
      }
      .cp {
        color: #59597f;
      }
      .icons {
        @apply flex flex-row justify-start items-center gap-1;
        img {
          width: 2rem;
          height: 2rem;
        }
      }
    }
    .links {
      @apply flex flex-row justify-between items-center gap-[50px];
      .bittap,
      .develop,
      .community {
        @apply flex flex-col justify-center items-start gap-4;
        .title {
          @apply text-2xl;
        }
        a {
          @apply text-lg no-underline;
          color: #d9d9ff;
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .footer {
    padding: 20px 0px;

    .install {
      margin: 5px auto;
      .slogan {
        @apply text-2xl;
      }
      .tips {
        @apply text-center  flex flex-row justify-center items-center my-2;
      }
      .btn-primary {
        @apply text-xl mb-2;
      }
    }
    .wrapper {
      margin: 10px auto;
      border-top-width: 0px;
      padding: 10px 0px 10px 0px;
      @apply flex justify-between items-center gap-[20px] flex-col-reverse;
      .copy {
        .logo {
          height: 50px;
          width: auto;
        }
      }
      .links {
        @apply w-full flex flex-row justify-between items-center gap-[10px] my-10;
        .bittap,
        .develop,
        .community {
          @apply w-full flex flex-col justify-center items-start gap-2;
          .title {
            @apply text-xl;
          }
          a {
            @apply text-sm no-underline;
            color: #d9d9ff;
          }
        }
      }
    }
  }
}
</style>
