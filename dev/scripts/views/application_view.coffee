TBB.ApplicationView = Em.View.extend
  didInsertElement: ->
    console.log 'insert element'
    # on click in table, check if click originated from table cell.
    # 
    @$('.modal-table').on('click', (e) =>
        if e.toElement.localName != 'video'
          $('#myModal').modal('hide')
          if $('#previewModalVideo')[0]
            $('#previewModalVideo')[0].pause()
          if $('#myModal').find('iframe')[0]
            $('#myModal').find('iframe')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      )

    $('#myModal').on 'hidden.bs.modal', () =>
        $(this).removeData('bs.modal')

    $(window).resize =>
      @$('.modal-table').height(window.innerHeight)
