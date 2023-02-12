/** Dispatch event on click outside of node */
export function clickOutside(node: Node) {
  
    const handleClick = (event: Event) => {
      if (node && !node.contains((event.target as Node)) && !event.defaultPrevented) {
        node.dispatchEvent(
          new CustomEvent<Node>('click_outside', {detail: node})
        )
      }
    }
  
      document.addEventListener('click', handleClick, true);
    
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
      }
  }

/**
 * App.svelte
 * <script>
	import {clickOutside} from './clickOutside.js';
	let name = 'world';
	
	function handleClickOutside(event) {
		alert('Click outside!');
	}
	
</script>

<h1>Hello {name}!</h1>
<div use:clickOutside on:click_outside={handleClickOutside}>
	Click outside me!
</div>

<style>
	div {
		height: 100px;
		color: white;
		background-color: steelblue;
		border-radius: 4px;
		display: flex;
		align-items:center;
		justify-content: center;
	}
</style>
 */