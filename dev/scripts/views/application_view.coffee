TBB.ApplicationView = Em.View.extend
  didInsertElement: -> 
    console.log 'insert element'
    # on click in table, check if click originated from table cell.
    # 
    @$('.modal-table').on('click', (e) =>
        if e.toElement.localName != 'video'
          $('#myModal').modal('hide')
          $('#previewModalVideo')[0].pause()
      )

    $(window).resize =>
      @$('.modal-table').height(window.innerHeight)
