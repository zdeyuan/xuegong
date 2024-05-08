<template>
  <div class="edu-form-size" :class="size">
    <div v-if="type == 'dialog'" class="dialog">
      <div class="edu-mask"></div>
      <div class="dialog-form" :style="{ width: width, top: top }">
        <div class="form_title">
          <span class="title" v-if="title">{{ title }}</span>
          <span @click="cancel" class="close-icon"><img :src="'./static/img/delete-btn.png'"/></span>
        </div>
        <div class="form-content">
          <slot> </slot>
        </div>
        <div v-if="isShowBtn" class="form-footer">
          <a-button v-if="isShowBtnSure" style="padding: 0 25px;margin-right: 15px;" type="primary" @click="ok">
            {{ sureText }}
          </a-button>
          <a-button v-if="isShowBtnCancel" style="padding: 0 25px;" class="close-btn" @click="cancel">
            {{ cancelText }}
          </a-button>
        </div>
      </div>
    </div>

    <div v-if="type == 'view'" class="view">
      <div class="view-form">
        <div class="form_view_title">
          <a-row>
            <a-col :span="16">
              <div class="title" v-if="title">
                {{ title }}
              </div>
            </a-col>
            <a-col :span="8">
              <div v-if="isShowBtn" class="form-footer" align="right">
                <a-button v-if="isShowBtnSure" style="padding: 0 25px;margin-right: 15px;" type="primary" @click="ok">
                  {{ sureText }}
                </a-button>
                <a-button v-if="isShowBtnCancel" style="padding: 0 25px;" @click="cancel">
                  {{ cancelText }}
                </a-button>
              </div>
            </a-col>
          </a-row>
        </div>
        <div class="form-content">
          <slot> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'dialog'
    },
    size: {
      type: String,
      default: 'normal'
    },
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '50px'
    },
    isShowBtn: {
      type: Boolean,
      default: true
    },
    isShowBtnSure: {
      type: Boolean,
      default: true
    },
    /* 是否填满页面 */
    fillView: {
      type: Boolean,
      default: true
    },
    isShowBtnCancel: {
      type: Boolean,
      default: true
    },
    draft: {
      type: Function,
      default: null
    },
    sureText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  data() {
    const data = {
      showDialog: false,
      formStatus: '',
      distData: {}
    };
    return data;
  },
  created() {
    if (this.type == '') {
      //  this.type="view";
    }
  },
  destroyed() {
    if (this.type == 'dialog') {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  },
  mounted() {
    if (this.type == 'dialog')
      this.$nextTick(() => {
        const body = document.querySelector('body');
        if (body.append) {
          body.append(this.$el);
        } else {
          body.appendChild(this.$el);
        }
      });
  },
  methods: {
    cancel() {
      this.$emit('cancel');
    },
    ok() {
      this.$emit('ok');
    }
  }
};
</script>
<style lang="less"></style>
