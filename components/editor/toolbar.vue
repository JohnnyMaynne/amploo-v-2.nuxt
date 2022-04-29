<template>
  <div class="h-12 border-b flex items-center justify-center space-x-1">
    <component
      v-for="(item, index) in tools"
      :key="index"
      :is="item.is"
      :item="item"
    />
  </div>
</template>

<script>
import ToolbarButton from "@/components/editor/toolbar-button"
import ToolbarSeparator from "@/components/editor/toolbar-separator"

export default {
  components: {ToolbarButton, ToolbarSeparator},

  props: {
    editor: Object,
  },

  computed: {
    tools() {
      return [
        {
          icon: 'corner-up-left-icon',
          is: 'toolbar-button',
          action: () => this.editor.chain().focus().undo().run()
        },
        {
          icon: 'corner-up-right-icon',
          is: 'toolbar-button',
          action: () => this.editor.chain().focus().redo().run()
        },

        {is: 'toolbar-separator'},

        {
          icon: 'h1-icon',
          is: 'toolbar-button',
          action: () => this.editor.chain().focus().toggleHeading({level: 1}).run()
        },
        {
          icon: 'h2-icon',
          is: 'toolbar-button',
          action: () => this.editor.chain().focus().toggleHeading({level: 2}).run()
        },
        {
          icon: 'h3-icon',
          is: 'toolbar-button',
          action: () => this.editor.chain().focus().toggleHeading({level: 3}).run()
        },

        {is: 'toolbar-separator'},

        {
          icon: 'bold-icon',
          is: 'toolbar-button',
          action: () => this.editor.chain().focus().toggleBold().run()
        },
        {
          icon: 'italic-icon',
          is: 'toolbar-button',
          action: () => this.editor.chain().focus().toggleItalic().run()
        },

        {is: 'toolbar-separator'},

        {
          icon: 'align-left-icon',
          is: 'toolbar-button',
          action: () => this.editor.chain().focus().setTextAlign('left').run()
        },
        {
          icon: 'align-center-icon',
          is: 'toolbar-button',
          action: () => this.editor.chain().focus().setTextAlign('center').run()
        },
        {
          icon: 'align-right-icon',
          is: 'toolbar-button',
          action: () => this.editor.chain().focus().setTextAlign('right').run()
        },

        {is: 'toolbar-separator'},

        {
          icon: 'list-icon',
          is: 'toolbar-button',
          action: () => this.editor.chain().focus().toggleBulletList().run()
        },
        {
          icon: 'list-numbers-icon', is: 'toolbar-button',
          action: () => this.editor.chain().focus().toggleOrderedList().run()
        },


        {is: 'toolbar-separator'},

        {
          icon: 'link-icon',
          is: 'toolbar-button',
          action: () => this.editor.chain().focus().toggleItalic().run()
        },

        {is: 'toolbar-separator'},

        {
          icon: 'droplet-icon',
          is: 'toolbar-button',
          action: () => this.editor.chain().focus().toggleItalic().run()
        },
        {
          icon: 'code-icon',
          is: 'toolbar-button',
          action: () => this.editor.chain().focus().toggleCodeBlock().run()
        },
        {
          icon: 'blockquote-icon',
          is: 'toolbar-button',
          action: () => this.editor.chain().focus().toggleBlockquote().run()
        },
        {
          icon: 'photo-icon',
          is: 'toolbar-button',
          action: () => this.editor.chain().focus().toggleItalic().run()
        },


      ]
    }
  }
}
</script>
