<template>
  <div class="text-magic" data-word="HJDTL">
    <div class="white"></div>
  </div>
</template>

<script>
  export default {
    name: 'logo'
  }
</script>

<style scoped>
  .text-magic {
    position: absolute;
    top: 40%;
    left: 10%;
    transform: translate(-50%, -50%) scale(2.5) rotate(-5deg);
    width: 50px;
    font-size: 12px;
    font-family: Raleway, Verdana, Arial;
    color: transparent;
    cursor: pointer;
  }

  .white {
    position: absolute;
    left: -10px;
    width: 100%;
    height: 1px;
    background: #fff;
    z-index: 4;
    transform: rotate(5deg);
    animation: whiteMove 10s ease-out infinite;
  }

  .text-magic::before {
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: 0;
    height: 36px;
    color: black;
    overflow: hidden;
    z-index: 2;
    filter: contrast(200%);
    text-shadow: 1px 0 0 black;
    animation: move 0.95s infinite;
  }

  .text-magic::after {
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: -1px;
    height: 36px;
    color: rgba(255, 255, 255, 0.8);
    overflow: hidden;
    z-index: 3;
    color: gray;
    filter: contrast(200%);
    text-shadow: -1px 0 0 white;
    mix-blend-mode: lighten;
    animation: move 1.1s infinite 0.2s;
  }

  @keyframes whiteMove {
    9% {
      top: 8px;
    }
    14% {
      top: 18px;
    }
    18% {
      top: 11px;
    }
    22% {
      top: 3px;
    }
    32% {
      top: 8px;
    }
    34% {
      top: 18px;
    }
    40% {
      top: 3px;
    }
    43% {
      top: 7px;
    }
    99% {
      top: 4px;
    }
  }

  @keyframes move {
    10% {
      top: -0.2px;
      left: -0.55px;
    }
    20% {
      top: 0.2px;
      left: -0.1px;
    }
    30% {
      left: .25px;
    }
    40% {
      top: -0.15px;
      left: -0.35px;
    }
    50% {
      left: 0.1px;
    }
    60% {
      top: 0.9px;
      left: -0.6px;
    }
    70% {
      top: -0.5px;
      left: 0.05px;
    }
    80% {
      top: -0.2px;
      left: -0.45px;
    }
    90% {
      left: 0.6px;
    }
    100% {
      left: -0.6px;
    }
  }
</style>
