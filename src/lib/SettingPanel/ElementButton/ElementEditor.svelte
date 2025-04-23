<script lang="ts">
	import ToolButtons from "./ToolButtons.svelte";

</script>

<div class="editor-wrapper">
	<div class="editor">
        <div class="editor-layout">
            <ToolButtons></ToolButtons>
        </div>
    </div>
</div>

<style lang="scss">
	.editor-wrapper {
		height: auto;
		margin: 0 0.5rem;
	}

	.editor {
		border-top: 0.0625rem solid black;
		padding: 0.5rem 0;
	}

    .editor-layout {
        display: flex;
        flex-direction: column;

    }
</style>
